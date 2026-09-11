import z from "zod";
import { PRODUCT_STATUS } from "./product.types.js";

export const createProductSchema = z.object({
    name: z.string().trim().min(3).max(120),
    description: z.string().trim().max(1_000).nullable().optional(),
    priceInPaise: z.number().int().positive(),
    stock: z.number().int().nonnegative(),
    status: z.enum([
        PRODUCT_STATUS.DRAFT,
        PRODUCT_STATUS.ACTIVE,
        PRODUCT_STATUS.ARCHIVED,
    ]).default(PRODUCT_STATUS.ACTIVE),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;