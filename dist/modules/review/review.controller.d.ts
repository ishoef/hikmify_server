import { Request, Response } from "express";
export declare const reviewController: {
    createReview: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    allReviews: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    getMyReviews: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    updateReview: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    deleteReview: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
};
//# sourceMappingURL=review.controller.d.ts.map