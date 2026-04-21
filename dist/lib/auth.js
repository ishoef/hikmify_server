"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const prisma_2 = require("./prisma");
const enums_1 = require("../utils/enums");
// If your Prisma file is located elsewhere, you can change the path
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma_2.prisma, {
        provider: "sqlite", // or "mysql", "postgresql", ...etc
    }),
    // Additional Information
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: enums_1.UserRole.USER,
                required: false,
            },
            status: {
                type: "string",
                defaultValue: enums_1.UserStatus.ACTIVE,
                required: false,
            },
            phone: {
                type: "string",
                required: false,
            },
        },
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        requireEmailVerification: false,
    },
    trustedOrigins: ["http://localhost:3000", "http://localhost:3001"],
});
//# sourceMappingURL=auth.js.map