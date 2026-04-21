import { Request, Response } from "express";
export declare const tutorProfileController: {
    createTutorProfile: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    getAllTutorProfiles: (req: Request, res: Response) => Promise<void>;
    getOwnTutorProfile: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    updateTutorProfile: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    deleteTutorProfile: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    getSingleTutorProfile: (req: Request, res: Response) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
};
//# sourceMappingURL=tutorProfile.controller.d.ts.map