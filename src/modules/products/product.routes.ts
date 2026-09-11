import { Router } from 'express';
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