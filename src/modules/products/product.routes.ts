import { Router } from 'express';
import { createProductSchema } from './product.schema.js';
import { createProduct, findProductById } from './product.service.js';
import { products } from './temp/product.data.js';


export const productRouter = Router();

productRouter.get("/", (_req, res) => {
    res.status(200).json({
        data: products,
        meta: {
            count: products.length
        }
    })
})

productRouter.post("/", (req, res) => {
    const body: unknown = req.body;
    const result = createProductSchema.safeParse(body);

    if (!result.success) {
        return res.status(400).json({
            error: {
                code: "VALIDATION_ERROR",
                message: "Request body is invalid",
                details: result.error.issues,
            },
        });
    }

    const product = createProduct(result.data);

    return res.status(201).json({
        data: product,
    });
});

productRouter.get<{ productId: string }>(
    "/:productId",
    (request, response) => {
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
    },
);