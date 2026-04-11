import { Router } from "express";
import { bookingController } from "./booking.controller";
import authMiddleware from "../../middleware/authMiddleware";

const router = Router();

router.post("/", authMiddleware(), bookingController.createBooking);
router.get("/", authMiddleware(), bookingController.getBookings);

export const bookingRouter: Router = router;
