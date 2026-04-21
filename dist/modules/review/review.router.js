"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const review_controller_1 = require("./review.controller");
const enums_1 = require("../../utils/enums");
const router = (0, express_1.Router)();
router.post("/", (0, authMiddleware_1.default)(), review_controller_1.reviewController.createReview);
router.get("/", (0, authMiddleware_1.default)(enums_1.UserRole.ADMIN, enums_1.UserRole.USER), review_controller_1.reviewController.allReviews);
router.get("/my-reviews", (0, authMiddleware_1.default)(enums_1.UserRole.USER), review_controller_1.reviewController.getMyReviews);
router.patch("/:reviewId", (0, authMiddleware_1.default)(enums_1.UserRole.ALL), review_controller_1.reviewController.updateReview);
router.delete("/:reviewId", (0, authMiddleware_1.default)(), review_controller_1.reviewController.deleteReview);
exports.reviewRouter = router;
//# sourceMappingURL=review.router.js.map