export declare const parseTime: (timeStr: string) => {
    success: boolean;
    message: string;
    hours?: never;
    minutes?: never;
} | {
    hours: number;
    minutes: number;
    success?: never;
    message?: never;
};
//# sourceMappingURL=parseTime.d.ts.map