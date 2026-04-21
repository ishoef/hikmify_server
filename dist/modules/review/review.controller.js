"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const review_service_1 = require("./review.service");
const createReview = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return {
                success: false,
                message: "You are not a user, please create an account",
            };
        }
        const result = await review_service_1.reviewService.createReview(req.body, user);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
// GEt all reivews
const allReviews = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return {
                success: false,
                message: "You are not a user, please create an account",
            };
        }
        const result = await review_service_1.reviewService.allReviews(user);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
// get my-reviews
const getMyReviews = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return {
                success: false,
                message: "You are not a user, please create an account",
            };
        }
        const result = await review_service_1.reviewService.getMyReviews(userId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
// Update review
const updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const user = req.user;
        if (!user) {
            return {
                success: false,
                message: "You are not a user, please create an account",
            };
        }
        const result = await review_service_1.reviewService.updateReview(reviewId, user, req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};
// delete reivew
const deleteReview = async (req, res) => {
    try {
        const user = req.user;
        const { reviewId } = req.params;
        if (!user) {
            return {
                success: false,
                message: "You are not a user, please create an account",
            };
        }
        const result = await review_service_1.reviewService.deleteReview(reviewId, user);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.reviewController = {
    createReview,
    allReviews,
    getMyReviews,
    updateReview,
    deleteReview,
};
//# sourceMappingURL=review.controller.js.map