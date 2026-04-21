import { BookingStatus, Review } from "../../generated/prisma/client";
import { User } from "../../types/types";
export declare const reviewService: {
    createReview: (data: Review, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: {
            tutor: {
                id: string;
                isActive: import("../../generated/prisma/enums").TutorActivity;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                bio: string | null;
                subjects: string[];
                experience: string | null;
                qualification: string | null;
                hourlyRate: number | null;
                availability: string[];
                averageRating: number;
                totalreviews: number;
                profileViews: number;
                isApproved: import("../../generated/prisma/enums").TutorStatus;
                categoryName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            tutorId: string;
            bookingId: string;
            rating: number;
            comment: string;
        };
    }>;
    allReviews: (user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: {
            totalReview: number;
            totalUser: number;
            totalTutor: number;
            totalBooking: number;
            reviews: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                studentId: string;
                tutorId: string;
                bookingId: string;
                rating: number;
                comment: string;
            }[];
        };
    }>;
    getMyReviews: (userId: string) => Promise<{
        success: boolean;
        message: string;
        data: {
            totalBooking: number;
            totalReview: number;
            reviews: ({
                tutor: {
                    id: string;
                    isActive: import("../../generated/prisma/enums").TutorActivity;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    bio: string | null;
                    subjects: string[];
                    experience: string | null;
                    qualification: string | null;
                    hourlyRate: number | null;
                    availability: string[];
                    averageRating: number;
                    totalreviews: number;
                    profileViews: number;
                    isApproved: import("../../generated/prisma/enums").TutorStatus;
                    categoryName: string;
                };
                booking: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    categoryId: string;
                    status: BookingStatus;
                    duration: number;
                    bookingDate: Date;
                    startTime: Date;
                    notes: string | null;
                    hourlyPrice: number;
                    totalPrice: number;
                    meetingLink: string | null;
                    studentId: string;
                    tutorId: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                studentId: string;
                tutorId: string;
                bookingId: string;
                rating: number;
                comment: string;
            })[];
        };
    } | {
        success: boolean;
        message: string;
        data?: never;
    }>;
    deleteReview: (reviewId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            tutorId: string;
            bookingId: string;
            rating: number;
            comment: string;
        };
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
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            tutorId: string;
            bookingId: string;
            rating: number;
            comment: string;
        };
        changes?: never;
        error?: never;
    } | {
        success: boolean;
        message: string;
        changes: Record<string, {
            old: unknown;
            new: unknown;
        }>;
        data: {
            tutor: {
                id: string;
                isActive: import("../../generated/prisma/enums").TutorActivity;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                bio: string | null;
                subjects: string[];
                experience: string | null;
                qualification: string | null;
                hourlyRate: number | null;
                availability: string[];
                averageRating: number;
                totalreviews: number;
                profileViews: number;
                isApproved: import("../../generated/prisma/enums").TutorStatus;
                categoryName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            tutorId: string;
            bookingId: string;
            rating: number;
            comment: string;
        };
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