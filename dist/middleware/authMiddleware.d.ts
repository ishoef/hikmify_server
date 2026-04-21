import { NextFunction, Request, Response } from "express";
import { UserRole } from "../utils/enums";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: string;
                role: string;
                emailVarified: boolean;
            };
        }
    }
}
declare const authMiddleware: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default authMiddleware;
//# sourceMappingURL=authMiddleware.d.ts.map