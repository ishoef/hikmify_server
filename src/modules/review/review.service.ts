import { BookingStatus, Review } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { User } from "../../types/types";
import { UserRole } from "../../utils/enums";

// CREATE review
const createReview = async (data: Review, user: User) => {
  try {
    const studentId = user.id;
    const { bookingId, tutorId, rating } = data;

    // 1. Validate rating range (must be between 1 and 5)
    if (rating < 1 || rating > 5) {
      return {
        success: false,
        message: "Rating must be between 1 and 5",
      };
    }

    // 2. Check if booking exists
    const booking = await prisma.bookings.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return {
        success: false,
        message: "Booking not Found",
      };
    }

    // 3. Ensure the logged-in user owns this booking
    if (booking.studentId !== studentId) {
      return {
        success: false,
        message: "You can only review your own booking",
      };
    }

    // 4. Allow review only if booking is completed
    if (booking.status !== BookingStatus.COMPLETED) {
      return {
        success: false,
        message: "Only completed bookings can be reviewed",
      };
    }

    // 5. Prevent duplicate review for the same booking
    const existingReview = await prisma.review.findFirst({
      where: { bookingId },
    });

    if (existingReview) {
      return {
        success: false,
        message: "You already reviewed this booking",
      };
    }

    // 6. Check if tutor exists
    const tutor = await prisma.tutor.findUnique({ where: { id: tutorId } });

    if (!tutor) {
      return {
        success: false,
        message: "Tutor not Found",
      };
    }

    // 7. Run transaction to keep data consistent
    const finalResult = await prisma.$transaction(async (tx) => {
      // Fetch current tutor rating data
      const tutorData = await tx.tutor.findUnique({
        where: { id: tutorId },
        select: {
          averageRating: true,
          totalreviews: true,
        },
      });

      const oldAverage = tutorData?.averageRating || 0;
      const totalReview = tutorData?.totalreviews || 0;

      // 8. Calculate new average rating
      const newAverage =
        (oldAverage * totalReview + data.rating) / (totalReview + 1); // raw average

      // Round to 1 decimal place (e.g., 4.666 → 4.6)
      const roundedAverage = Number(newAverage.toFixed(1));

      // 9. Update tutor review stats
      await tx.tutor.update({
        where: { id: tutorId },
        data: {
          totalreviews: { increment: 1 },
          averageRating: roundedAverage,
        },
      });

      // 10. Create review record
      const reviewDone = await tx.review.create({
        data: {
          ...data,
          studentId, // attach logged-in student
        },
        include: {
          tutor: true, // return tutor info with review
        },
      });

      return reviewDone;
    });

    // 11. Success response
    return {
      success: true,
      message: "Your review created successfully",
      data: finalResult,
    };
  } catch (error: any) {
    // 12. Error handling
    return {
      success: false,
      message: "Review create failed",
    };
  }
};

// GEt All Reviews for admin
const allReviews = async (user: User) => {
  if (user.role !== UserRole.ADMIN) {
    return {
      success: false,
      message: "You are not authorized to access this resource",
    };
  }
  const reviews = await prisma.review.findMany();
  const totalReview = await prisma.review.count();
  const totalUser = await prisma.user.count();
  const totalTutor = await prisma.tutor.count();

  return {
    success: true,
    message:
      reviews.length === 0
        ? "No review found"
        : "All review fetched successfully",
    data: { reviews, totalReview, totalUser, totalTutor },
  };
};

// Get my-reivews
const getMyreviews = async (userId: string) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        studentId: userId,
      },
    });

    const totalBooking = await prisma.bookings.count({
      where: {
        studentId: userId,
      },
    });
    const totalReview = await prisma.review.count({
      where: {
        studentId: userId,
      },
    });

    return {
      success: true,
      message:
        reviews.length === 0
          ? "You don't have any review"
          : "All review fetched successfully",
      data: { totalBooking, totalReview, reviews },
    };
  } catch (error: any) {
    return {
      success: false,
      message: "My reviews fetched failed",
    };
  }
};

// Delete review
const deleteReview = async (reviewId: string, user: User) => {
  try {
    // review check
    const existingReview = await prisma.review.findUnique({
      where: {
        id: reviewId,
      },
    });

    if (!existingReview) {
      return {
        success: false,
        message: "Review not found",
      };
    }

    // authorization check
    if (existingReview.studentId !== user.id && user.role !== UserRole.ADMIN) {
      return {
        success: false,
        message: "You are not authorized to delete this review",
      };
    }

    // delete review and update tutor data
    const result = await prisma.$transaction(async (tx) => {
      const existingReview = await tx.review.findUnique({
        where: {
          id: reviewId,
        },
        include: {
          tutor: {
            select: {
              id: true,
              totalreviews: true,
              averageRating: true,
            },
          },
        },
      });

      if (!existingReview) {
        return {
          success: false,
          message: "Review not found",
        };
      }

      const oldAverage = existingReview?.tutor.averageRating || 0;
      const totalReview = existingReview.tutor.totalreviews || 0;

      let newAverage = 0;

      // ✅ handle edge case (last review delete)
      if (totalReview <= 1) {
        newAverage = 0;
      } else {
        newAverage =
          (oldAverage * totalReview - existingReview.rating) /
          (totalReview - 1);
      }

      const roundedAverage = Number(newAverage.toFixed(1));

      await tx.tutor.update({
        where: { id: existingReview.tutorId },
        data: {
          totalreviews: { decrement: 1 },
          averageRating: roundedAverage,
        },
      });

      const deletedReview = await tx.review.delete({
        where: {
          id: reviewId,
        },
      });

      return deletedReview;
    });

    return {
      success: true,
      message: "Your review deleted successfully",
      data: result,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Sorry! Review deletaion failed! ",
    };
  }
};

export const reviewService = {
  createReview,
  allReviews,
  getMyreviews,
  deleteReview,
};
