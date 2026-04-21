"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_1 = require("better-auth/node");
const category_router_1 = require("./modules/category/category.router");
const auth_1 = require("./lib/auth");
const tutorProfile_router_1 = require("./modules/tutorProfile/tutorProfile.router");
const booking_router_1 = require("./modules/booking/booking.router");
const review_router_1 = require("./modules/review/review.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
}));
// Json Middleware
app.use(express_1.default.json());
// Auth Route
app.all("/api/auth/*splate", (0, node_1.toNodeHandler)(auth_1.auth));
app.get("/", (req, res) => {
    res.send("The server of Hikmify is running");
});
// All Routes
app.use("/category", category_router_1.categoryRouter);
app.use("/tutors", tutorProfile_router_1.tutorProfileRouter);
app.use("/bookings", booking_router_1.bookingRouter);
app.use("/reviews", review_router_1.reviewRouter);
exports.default = app;
//# sourceMappingURL=app.js.map