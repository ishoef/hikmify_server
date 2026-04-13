import { Request, Response } from "express";
import { reviewService } from "./review.service";

const createReview = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    if (!user) {
      return {
        success: false,
        message: "You are not a user, please create an account",
      };
    }

    const result = await reviewService.createReview(req.body, user);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GEt all reivews
const allReviews = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    if (!user) {
      return {
        success: false,
        message: "You are not a user, please create an account",
      };
    }
    const result = await reviewService.allReviews(user);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete reivew
const deleteReview = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    if (!user) {
      return {
        success: false,
        message: "You are not a user, please create an account",
      };
    }
    const result = await reviewService.deleteReview();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const reviewController = {
  createReview,
  allReviews,
  deleteReview,
};
