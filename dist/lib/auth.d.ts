import { UserRole, UserStatus } from "../utils/enums";
export declare const auth: import("better-auth", { with: { "resolution-mode": "import" } }).Auth<{
    database: (options: import("better-auth", { with: { "resolution-mode": "import" } }).BetterAuthOptions) => import("better-auth", { with: { "resolution-mode": "import" } }).DBAdapter<import("better-auth", { with: { "resolution-mode": "import" } }).BetterAuthOptions>;
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