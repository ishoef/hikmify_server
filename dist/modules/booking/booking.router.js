"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const enums_1 = require("../../utils/enums");
const router = (0, express_1.Router)();
// Create Booking
router.post("/", (0, authMiddleware_1.default)(enums_1.UserRole.USER), booking_controller_1.bookingController.createBooking);
// get all booking
router.get("/", (0, authMiddleware_1.default)(), booking_controller_1.bookingController.getBookings);
// get single booking by id
router.get("/:bookingId", (0, authMiddleware_1.default)(enums_1.UserRole.USER, enums_1.UserRole.ADMIN), booking_controller_1.bookingController.getbookingById);
// update booking data
router.patch("/:bookingId", (0, authMiddleware_1.default)(enums_1.UserRole.ADMIN, enums_1.UserRole.USER), booking_controller_1.bookingController.updateBooking);
// delete booking by id
router.delete("/:bookingId", (0, authMiddleware_1.default)(enums_1.UserRole.ADMIN, enums_1.UserRole.USER), booking_controller_1.bookingController.deleteBookingById);
exports.bookingRouter = router;
//# sourceMappingURL=booking.router.js.map