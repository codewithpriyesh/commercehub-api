import { Router } from "express";

import {
    createProductHandler,
    getProductByIdHandler,
    listProductsHandler,
} from "./product.controller.js";

export const productRouter = Router();

productRouter.get("/", listProductsHandler);
productRouter.post("/", createProductHandler);
productRouter.get("/:productId", getProductByIdHandler);