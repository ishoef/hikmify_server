import { Review } from "../../generated/prisma/client";
import { User } from "../../types/types";
export declare const reviewService: {
    createReview: (data: Review, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
    }>;
    allReviews: (user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: {
            totalReview: any;
            totalUser: any;
            totalTutor: any;
            totalBooking: any;
            reviews: any;
        };
    }>;
    getMyReviews: (userId: string) => Promise<{
        success: boolean;
        message: string;
        data: {
            totalBooking: any;
            totalReview: any;
            reviews: any;
        };
    } | {
        success: boolean;
        message: string;
        data?: never;
    }>;
    deleteReview: (reviewId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        data: any;
    } | {
        success: boolean;
        message: string;
        data?: never;
    }>;
    updateReview: (reviewId: string, user: User, data: Partial<Review>) => Promise<{
        success: boolean;
        message: string;
        data?: never;
        changes?: never;
        error?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
        changes?: never;
        error?: never;
    } | {
        success: boolean;
        message: string;
        changes: Record<string, {
            old: unknown;
            new: unknown;
        }>;
        data: any;
        error?: never;
    } | {
        success: boolean;
        message: string;
        error: any;
        data?: never;
        changes?: never;
    }>;
};
//# sourceMappingURL=review.service.d.ts.map