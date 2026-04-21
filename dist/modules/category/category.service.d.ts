export interface CategoryData {
    name: string;
    description?: string;
    tags: string[];
    icon?: string;
    isActive?: boolean;
}
export declare const categoryService: {
    createCategory: (data: CategoryData) => Promise<{
        id: string;
        name: string;
        description: string | null;
        tags: string[];
        icon: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllCategory: () => Promise<{
        success: boolean;
        totalData: number;
        data: {
            id: string;
            name: string;
            description: string | null;
            tags: string[];
            icon: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        message: string;
    }>;
    updateCategory: (categoryId: string, data: {
        name?: string;
        description?: string;
        icon?: string;
    }) => Promise<{
        success: boolean;
        data: {
            id: string;
            name: string;
            description: string | null;
            tags: string[];
            icon: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    deleteCategory: (categoryId: string) => Promise<{
        success: boolean;
        data: {
            id: string;
            name: string;
            description: string | null;
            tags: string[];
            icon: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map