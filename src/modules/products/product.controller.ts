import type { Request, Response } from "express";

import { createProductSchema } from "./product.schema.js";
import {
    createProduct,
    findProductById,
    listProducts,
} from "./product.service.js";

type ProductIdParams = {
    productId: string;
};

export function listProductsHandler(
    _request: Request,
    response: Response,
) {
    const products = listProducts();

    return response.status(200).json({
        data: products,
        meta: {
            count: products.length,
        },
    });
}

export function createProductHandler(
    request: Request,
    response: Response,
) {
    const body: unknown = request.body;
    const result = createProductSchema.safeParse(body);

    if (!result.success) {
        return response.status(400).json({
            error: {
                code: "VALIDATION_ERROR",
                message: "Request body is invalid",
                details: result.error.issues,
            },
        });
    }

    const product = createProduct(result.data);

    return response.status(201).json({
        data: product,
    });
}

export function getProductByIdHandler(
    request: Request<ProductIdParams>,
    response: Response,
) {
    const product = findProductById(request.params.productId);

    if (!product) {
        return response.status(404).json({
            error: {
                code: "PRODUCT_NOT_FOUND",
                message: "Product not found",
            },
        });
    }

    return response.status(200).json({
        data: product,
    });
}