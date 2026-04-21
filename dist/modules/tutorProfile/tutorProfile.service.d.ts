import { TutorProfile, User } from "../../types/types";
export declare const tutorProfileService: {
    createTutorProfile: (data: TutorProfile, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        data: any;
        message?: never;
    }>;
    getAllTutorProfiles: () => Promise<{
        success: boolean;
        totalUser: any;
        tutorProfiles: any;
        data: any;
    }>;
    getOwnTutorProfile: (userId: string) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        data: any;
        message?: never;
    }>;
    deleteTutorProfile: (user: User, profileId: string) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
    }>;
    updateTutorProfile: (profileId: string, data: Partial<TutorProfile>, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
        changes?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
        changes?: never;
    } | {
        success: boolean;
        message: string;
        data: any;
        changes: Record<string, {
            old: unknown;
            new: unknown;
        }>;
    }>;
    getSingleTutorProfile: (profileId: string) => Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
};
//# sourceMappingURL=tutorProfile.service.d.ts.map