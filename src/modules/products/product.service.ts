import { randomUUID } from "crypto";
import type { CreateProductInput } from "./product.schema.js";
import type { Product } from "./product.types.js";
import { products } from "./temp/product.data.js";

export function createProduct(input: CreateProductInput): Product {
    const now = new Date();

    const product: Product = {
        id: randomUUID(),
        name: input.name,
        description: input.description ?? null,
        priceInPaise: input.priceInPaise,
        stock: input.stock,
        status: input.status,
        createdAt: now,
        updatedAt: now,
    };

    products.push(product);
    return product;
}

export function findProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id);
}