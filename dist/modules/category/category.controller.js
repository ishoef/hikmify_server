"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const category_service_1 = require("./category.service");
// POST Category
const createCategory = async (req, res) => {
    try {
        const result = await category_service_1.categoryService.createCategory(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
// GET all category
const getAllCategory = async (req, res) => {
    try {
        const user = req.user;
        console.log("From categoryController:", user);
        const result = await category_service_1.categoryService.getAllCategory();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to Get all categories",
        });
    }
};
// UPDATE category data
const updateCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        console.log(categoryId);
        console.log(req.body);
        const result = await category_service_1.categoryService.updateCategory(categoryId, req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
// DELETE category by id
const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const result = await category_service_1.categoryService.deleteCategory(categoryId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.categoryController = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.controller.js.map