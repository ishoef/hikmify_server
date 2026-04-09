import { prisma } from "../../lib/prisma";
import { TutorProfile, User } from "../../types/types";
import { UserRole } from "../../utils/enums";

// CREATE Tutor Profile
const createTutorProfile = async (data: TutorProfile, user: User) => {
  // const userId = user.id;

  const existsCategory = await prisma.category.findUnique({
    where: {
      name: data.categoryName,
    },
  });

  if (!existsCategory) {
    return {
      success: false,
      message: "Your category is missing",
    };
  }

  // Duplicate TutorPrifle Check
  const existTutorProfile = await prisma.tutor.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (existTutorProfile) {
    return {
      success: false,
      message: "Your are already created tutor profile",
    };
  }

  const createdTutorProfile = await prisma.$transaction(async (tx) => {
    const result = await tx.tutor.create({
      data: {
        ...data,
        userId: user.id,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            role: true,
            image: true,
            phone: true,
          },
        },
      },
    });

    if (user.role === UserRole.USER) {
      await tx.user.update({
        where: { id: user.id },
        data: { role: UserRole.TUTOR },
      });
    }

    return result;
  });

  // const createdTutorProfile = await prisma.tutor.findUnique({
  //   where: {
  //     id: finalResult.id,
  //   },
  //   include: {
  //     user: {
  //       select: {
  //         name: true,
  //         email: true,
  //         role: true,
  //         image: true,
  //         phone: true,
  //       },
  //     },
  //   },
  // });

  // console.log("final prifle check", finalProfile);

  return {
    success: true,
    data: createdTutorProfile,
  };
};

// GET All Tutor Profiles for admin
const getAllTutorProfiles = async () => {
  const data = await prisma.tutor.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
          role: true,
          phone: true,
          image: true,
        },
      },
    },
  });
  const totalUser = await prisma.user.count();
  const tutorProfiles = await prisma.tutor.count();

  return {
    success: true,
    totalUser,
    tutorProfiles,
    data,
  };
};

// GET own tutor profile
const getOwnTutorProfile = async (userId: string) => {
  const tutorProfile = await prisma.tutor.findUnique({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          phone: true,
          role: true,
          image: true,
        },
      },
    },
  });

  if (!tutorProfile) {
    return {
      success: false,
      message: "You don't have any tutor profile",
    };
  }

  return {
    success: true,
    data: tutorProfile,
  };
};

//

// DELETE profile
const deleteTutorProfile = async (user: User, profileId: string) => {
  const userId = user.id;

  const existProfile = await prisma.tutor.findUnique({
    where: {
      id: profileId,
    },
  });

  if (!existProfile) {
    return {
      success: false,
      message: "No tutor profile found",
    };
  }

  if (existProfile.userId !== userId && user.role !== UserRole.ADMIN) {
    return {
      success: false,
      message: "You are not authorized for deleting this profile",
    };
  }

  const deleteResult = await prisma.tutor.delete({
    where: {
      id: profileId,
    },
  });

  const targetUserId = existProfile.userId;

  if (deleteResult) {
    await prisma.user.update({
      where: {
        id: targetUserId,
      },
      data: {
        role: UserRole.USER,
      },
    });
  }

  return {
    success: true,
    message:
      user.role !== UserRole.ADMIN
        ? "Your Profile is successfully deleted"
        : "The tutor profile is successfylly deleted",
    data: deleteResult,
  };
};

export const tutorProfileService = {
  createTutorProfile,
  getAllTutorProfiles,
  getOwnTutorProfile,
  deleteTutorProfile,
};
