import { BookingData, User } from "../../types/types";
export declare const bookingService: {
    createBooking: (data: BookingData, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        data: any;
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
        data: any;
    }>;
    getbookingById: (bookingId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
    }>;
    deleteBookingById: (bookingId: string, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
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
        data: any;
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