import { Router } from "express";
import { bookingController } from "./booking.controller";
import authMiddleware from "../../middleware/authMiddleware";
import { UserRole } from "../../utils/enums";

const router = Router();

router.post(
  "/",
  authMiddleware(UserRole.USER),
  bookingController.createBooking,
);
router.get("/", authMiddleware(), bookingController.getBookings);
router.get(
  "/:bookingId",
  authMiddleware(UserRole.USER, UserRole.ADMIN),
  bookingController.getbookingById,
);

export const bookingRouter: Router = router;
