export const PRODUCT_STATUS = {
    DRAFT: "draft",
    ACTIVE: "active",
    ARCHIVED: "archived",
} as const;

export type ProductStatus = typeof PRODUCT_STATUS[keyof typeof PRODUCT_STATUS];

export interface Product {
    readonly id: string;
    name: string;
    description: string | null;
    priceInPaise: number;
    stock: number;
    status: ProductStatus;
    readonly createdAt: Date;
    updatedAt: Date;
}