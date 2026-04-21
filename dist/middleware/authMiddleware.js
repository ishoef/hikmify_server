"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../lib/auth");
const enums_1 = require("../utils/enums");
const authMiddleware = (...roles) => {
    return async (req, res, next) => {
        try {
            // For Validate the user
            // Get User Session
            const session = await auth_1.auth.api.getSession({
                headers: req.headers,
            });
            // Session Check
            if (!session) {
                return res.status(401).json({
                    success: false,
                    message: "You are not authorized!",
                });
            }
            const user = session?.user;
            // Set UserData to the Request
            req.user = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                emailVarified: user.emailVerified,
            };
            if (roles.includes(enums_1.UserRole.ALL)) {
                return next();
            }
            if (roles.length && !roles.includes(req.user?.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden! You don't have permission to access this",
                });
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map