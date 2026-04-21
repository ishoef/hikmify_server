"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorProfileRouter = void 0;
const express_1 = require("express");
const tutorProfile_controller_1 = require("./tutorProfile.controller");
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const enums_1 = require("../../utils/enums");
const router = (0, express_1.Router)();
router.post("/", (0, authMiddleware_1.default)(enums_1.UserRole.USER, enums_1.UserRole.TUTOR), tutorProfile_controller_1.tutorProfileController.createTutorProfile);
router.get("/", tutorProfile_controller_1.tutorProfileController.getAllTutorProfiles);
// GET own profile
router.get("/own-profile", (0, authMiddleware_1.default)(enums_1.UserRole.ALL), tutorProfile_controller_1.tutorProfileController.getOwnTutorProfile);
router.get("/:profileId", (0, authMiddleware_1.default)(enums_1.UserRole.ALL), tutorProfile_controller_1.tutorProfileController.getSingleTutorProfile);
router.patch("/:profileId", (0, authMiddleware_1.default)(enums_1.UserRole.ADMIN, enums_1.UserRole.TUTOR), tutorProfile_controller_1.tutorProfileController.updateTutorProfile);
// DELETE Profile by user or admin
router.delete("/:profileId", (0, authMiddleware_1.default)(enums_1.UserRole.ADMIN, enums_1.UserRole.TUTOR), tutorProfile_controller_1.tutorProfileController.deleteTutorProfile);
exports.tutorProfileRouter = router;
//# sourceMappingURL=tutorProfile.router.js.map