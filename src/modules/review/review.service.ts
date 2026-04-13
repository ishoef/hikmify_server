import { BookingStatus, Review } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { User } from "../../types/types";
import { UserRole } from "../../utils/enums";

// CREATE review
const createReview = async (data: Review, user: User) => {
  try {
    const studentId = user.id;
    const { bookingId, tutorId, rating } = data;

    // validate rating
    if (rating < 1 || rating > 5) {
      return {
        success: false,
        message: "Rating must be between 1 and 5",
      };
    }

    // booking check
    const booking = await prisma.bookings.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return {
        success: false,
        message: "Booking not Found",
      };
    }

    if (booking.studentId !== studentId) {
      return {
        success: false,
        message: "You can only review your own booking",
      };
    }

    if (booking.status !== BookingStatus.COMPLETED) {
      return {
        success: false,
        message: "Only completed bookings can be reviewed",
      };
    }

    // One booking allows only one review per student
    const existingReview = await prisma.review.findFirst({
      where: { bookingId },
    });

    if (existingReview) {
      return {
        success: false,
        message: "You already reviewed this booking",
      };
    }

    // tutor exist check
    const tutor = await prisma.tutor.findUnique({ where: { id: tutorId } });

    if (!tutor) {
      return {
        success: false,
        message: "Tutor not Found",
      };
    }

    const finalResult = await prisma.$transaction(async (tx) => {
      const tutorData = await tx.tutor.findUnique({
        where: { id: tutorId },
        select: {
          averageRating: true,
          totalreviews: true,
        },
      });

      const oldAverage = tutorData?.averageRating || 0;
      const totalReview = tutorData?.totalreviews || 0;

      // calculate new average rating
      const newAverage =
        (oldAverage * totalReview + data.rating) / (totalReview + 1); // 4.6666666666

      const roundedAverage = Number(newAverage.toFixed(1)); // fix to : 4.6

      await tx.tutor.update({
        where: { id: tutorId },
        data: {
          totalreviews: { increment: 1 },
          averageRating: roundedAverage,
        },
      });

      const reviewDone = await tx.review.create({
        data: {
          ...data,
          studentId,
        },
        include: {
          tutor: true,
        },
      });

      return reviewDone;
    });

    return {
      success: true,
      message: "Your review created successfully",
      data: finalResult,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Review create failed",
    };
  }
};

// GEt All Reviews
const allReviews = async (user: User) => {
  if (user.role !== UserRole.ADMIN) {
    return {
      success: false,
      message: "You are not authorized to access this resource",
    };
  }
  const result = await prisma.review.findMany();
  const totalReview = await prisma.review.count();
  const totlaUser = await prisma.user.count();
  const totalTutor = await prisma.tutor.count();

  return {
    success: true,
    message: "All Review fetched successfully",
    totlaUser,
    totalTutor,
    totalReview,
    data: result,
  };
};

// Delete review
const deleteReview = async () => {
  try {
    return {
      success: true,
      message: "Good to go now boss, we are ready! 😊",
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Sorry! Review deletaion failed! 😔",
    };
  }
};

export const reviewService = {
  createReview,
  allReviews,
  deleteReview,
};
