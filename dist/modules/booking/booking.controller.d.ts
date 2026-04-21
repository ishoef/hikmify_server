import { Request, Response } from "express";
export declare const bookingController: {
    createBooking: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    getBookings: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    getbookingById: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    deleteBookingById: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    updateBooking: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
};
//# sourceMappingURL=booking.controller.d.ts.map