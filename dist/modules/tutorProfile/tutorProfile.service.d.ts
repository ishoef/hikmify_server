import { TutorProfile, User } from "../../types/types";
export declare const tutorProfileService: {
    createTutorProfile: (data: TutorProfile, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        data: {
            user: {
                name: string;
                email: string;
                image: string | null;
                role: string | null;
                phone: string | null;
            };
        } & {
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
        message?: never;
    }>;
    getAllTutorProfiles: () => Promise<{
        success: boolean;
        totalUser: number;
        tutorProfiles: number;
        data: ({
            user: {
                name: string;
                email: string;
                image: string | null;
                role: string | null;
                phone: string | null;
            };
        } & {
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
        })[];
    }>;
    getOwnTutorProfile: (userId: string) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        data: {
            user: {
                name: string;
                email: string;
                image: string | null;
                role: string | null;
                phone: string | null;
            };
        } & {
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
        message?: never;
    }>;
    deleteTutorProfile: (user: User, profileId: string) => Promise<{
        success: boolean;
        message: string;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: {
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
    }>;
    updateTutorProfile: (profileId: string, data: Partial<TutorProfile>, user: User) => Promise<{
        success: boolean;
        message: string;
        data?: never;
        changes?: never;
    } | {
        success: boolean;
        message: string;
        data: {
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
        changes?: never;
    } | {
        success: boolean;
        message: string;
        data: {
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
        changes: Record<string, {
            old: unknown;
            new: unknown;
        }>;
    }>;
    getSingleTutorProfile: (profileId: string) => Promise<{
        success: boolean;
        message: string;
        data: ({
            _count: {
                bookings: number;
            };
            user: {
                name: string;
                email: string;
                role: string | null;
                status: string | null;
                phone: string | null;
            };
        } & {
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
        }) | null;
    }>;
};
//# sourceMappingURL=tutorProfile.service.d.ts.map