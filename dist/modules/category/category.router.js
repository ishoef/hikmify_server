"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const enums_1 = require("../../utils/enums");
const router = (0, express_1.Router)();
router.post("/", (0, authMiddleware_1.default)(enums_1.UserRole.ADMIN, enums_1.UserRole.USER), category_controller_1.categoryController.createCategory);
router.get("/categories", (0, authMiddleware_1.default)(enums_1.UserRole.TUTOR, enums_1.UserRole.ADMIN), category_controller_1.categoryController.getAllCategory);
router.patch("/:categoryId", category_controller_1.categoryController.updateCategory);
router.delete("/:categoryId", category_controller_1.categoryController.deleteCategory);
exports.categoryRouter = router;
//# sourceMappingURL=category.router.js.map