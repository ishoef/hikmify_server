"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const prisma_1 = require("../../lib/prisma");
const createCategory = async (data) => {
    const normalizedName = data.name.trim().toLowerCase();
    // optional pre-check (UX improvement only)
    const exists = await prisma_1.prisma.category.findFirst({
        where: {
            name: {
                equals: normalizedName,
                mode: "insensitive",
            },
        },
    });
    if (exists) {
        throw new Error(`'${data.name}' category already exists`);
    }
    // Creating the category
    const result = await prisma_1.prisma.category.create({
        data: {
            ...data,
            name: normalizedName,
            isActive: data.isActive ?? true,
        },
    });
    return result;
};
// ALL category
const getAllCategory = async () => {
    // GET all categories
    const result = await prisma_1.prisma.category.findMany();
    // Total Data Count
    const totalData = await prisma_1.prisma.category.count();
    return {
        success: true,
        totalData: totalData,
        data: result,
        message: result.length === 0
            ? "No categories found"
            : "Categories fetched successfully",
    };
};
// update category
const updateCategory = async (categoryId, data) => {
    const existsCategory = await prisma_1.prisma.category.findUnique({
        where: {
            id: categoryId,
        },
    });
    if (!existsCategory) {
        throw new Error("Ai category nai");
    }
    const result = await prisma_1.prisma.category.update({
        where: {
            id: categoryId,
        },
        data,
    });
    console.log("After Update category: ", result);
    return {
        success: true,
        data: result,
    };
};
// DELETE Category
const deleteCategory = async (categoryId) => {
    const result = await prisma_1.prisma.category.delete({
        where: {
            id: categoryId,
        },
    });
    return {
        success: true,
        data: result,
        message: "this category deleted successfully",
    };
};
exports.categoryService = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.service.js.map