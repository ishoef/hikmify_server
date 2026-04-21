import { UserRole, UserStatus } from "../utils/enums";
export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    user: {
        additionalFields: {
            role: {
                type: "string";
                defaultValue: UserRole;
                required: false;
            };
            status: {
                type: "string";
                defaultValue: UserStatus;
                required: false;
            };
            phone: {
                type: "string";
                required: false;
            };
        };
    };
    emailAndPassword: {
        enabled: true;
        autoSignIn: true;
        requireEmailVerification: false;
    };
    trustedOrigins: string[];
}>;
//# sourceMappingURL=auth.d.ts.map