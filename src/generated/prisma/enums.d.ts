export declare const BookingStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
export declare const TutorStatus: {
    readonly APPROVED: "APPROVED";
    readonly PENDING: "PENDING";
};
export type TutorStatus = (typeof TutorStatus)[keyof typeof TutorStatus];
export declare const TutorActivity: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly BANNED: "BANNED";
};
export type TutorActivity = (typeof TutorActivity)[keyof typeof TutorActivity];
//# sourceMappingURL=enums.d.ts.map