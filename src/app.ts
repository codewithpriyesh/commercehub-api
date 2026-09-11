import express from "express";
import { productRouter } from "./modules/products/product.routes.js";

export const app = express();
app.use(express.json());

app.get("/health", (_request, response) => {
  response.status(200).json({
    status: "ok",
  });
});

app.use("/api/v1/products", productRouter);