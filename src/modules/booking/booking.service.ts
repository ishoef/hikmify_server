import { prisma } from "../../lib/prisma";
import { BookingData, User } from "../../types/types";
import { UserRole } from "../../utils/enums";
import { parseTime } from "../../utils/parseTime";

const createBooking = async (data: BookingData, user: User) => {
  const studentId = user?.id;
  // console.log("bookingService: ", data);
  // 1. Role Checking (User as stuend allowed | Totor Not Allowed)
  if (user.role === UserRole.TUTOR) {
    return {
      success: false,
      message: "You are not allowed to book this session.",
    };
  }

  // 2. tutor find
  const tutor = await prisma.tutor.findUnique({
    where: {
      id: data.tutorId,
    },
    include: {
      user: { select: { name: true } },
    },
  });

  const tutorName = tutor?.user.name;

  if (!tutor) {
    return {
      success: false,
      message: "Tutor not found",
    };
  }

  // 4. calculate hourlyPrice and total price based on duration
  const hourlyPrice = tutor?.hourlyRate as number;
  const totalPrice = hourlyPrice * data.duration;

  // bookingData format
  const bookingDate = new Date(data.bookingDate);

  // booking date validation check
  if (isNaN(bookingDate.getTime())) {
    return {
      success: false,
      message: "Invalid booking date",
    };
  }

  // merge date and time
  const { hours, minutes } = parseTime(data.startTime.toString());
  const finalStartTime = new Date(bookingDate);
  finalStartTime.setHours(hours ?? 0, minutes ?? 0, 0, 0);

  // bookingDate convert to Day
  const bookingDay = bookingDate
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  // tutor availability check on the bookingDay
  if (!tutor?.availability.includes(bookingDay)) {
    return {
      success: false,
      message: `Tutor is not available on ${bookingDay} `,
    };
  }

  // Get the endTime
  const endTime = new Date(finalStartTime);
  endTime.setHours(endTime.getHours() + data.duration);

  // conflickt check
  const existingBookings = await prisma.bookings.findMany({
    where: {
      tutorId: data.tutorId,
      status: {
        in: ["PENDING", "CONFIRMED"],
      },
    },
  });

  const isConflict = existingBookings.some((booking) => {
    const existingStart = new Date(booking.startTime);
    const existingEnd = new Date(existingStart);
    existingEnd.setHours(existingEnd.getHours() + booking.duration);

    return finalStartTime < existingEnd && endTime > existingStart;
  });

  if (isConflict) {
    return {
      success: false,
      message: "This time slot is already booked",
    };
  }

  console.log(
    data,
    studentId,
    hourlyPrice,
    totalPrice,
    bookingDate,
    finalStartTime,
  );

  // Create booking
  const result = await prisma.bookings.create({
    data: {
      ...data,
      studentId,
      hourlyPrice,
      totalPrice,
      bookingDate: bookingDate,
      startTime: finalStartTime,
    },
  });

  return {
    success: true,
    data: result,
    message: `Your booking was created on ${result.bookingDate} with tutor ${tutorName}.`,
  };
};

// GET all bookings
const getBookings = async (user: User) => {
  const result = await prisma.bookings.findMany({
    where: {
      studentId: user.id,
    },
  });

  const totalData = await prisma.bookings.count();

  return {
    success: true,
    data: result,
    totalData,
    message: "Bookings data fetched successfully",
  };
};

export const bookingService = {
  createBooking,
  getBookings,
};
