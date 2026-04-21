import { BookingData, User } from "../../types/types";
export declare const bookingService: {
    createBooking: (data: BookingData, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            status: import("../../generated/prisma/enums").BookingStatus;
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
        message: string;
    }>;
    getBookings: (user: User) => Promise<{
        success: boolean;
        message: string;
        totalBooking?: never;
        data?: never;
    } | {
        success: boolean;
        totalBooking: number;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            status: import("../../generated/prisma/enums").BookingStatus;
            duration: number;
            bookingDate: Date;
            startTime: Date;
            notes: string | null;
            hourlyPrice: number;
            totalPrice: number;
            meetingLink: string | null;
            studentId: string;
            tutorId: string;
        }[];
    }>;
    getbookingById: (bookingId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            status: import("../../generated/prisma/enums").BookingStatus;
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
    }>;
    deleteBookingById: (bookingId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            status: import("../../generated/prisma/enums").BookingStatus;
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
    }>;
    updateBooking: (data: BookingData, bookingId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        changes?: never;
        data?: never;
        error?: never;
    } | {
        success: boolean;
        message: string;
        changes: Record<string, {
            old: unknown;
            new: unknown;
        }>;
        data: {
            student: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
                role: string | null;
                status: string | null;
                phone: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            status: import("../../generated/prisma/enums").BookingStatus;
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
        error?: never;
    } | {
        success: boolean;
        message: string;
        error: any;
        changes?: never;
        data?: never;
    }>;
};
//# sourceMappingURL=booking.service.d.ts.map