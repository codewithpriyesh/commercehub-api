import { PRODUCT_STATUS, type Product } from "../product.types.js";

export const products = [
  {
    id: "prod_001",
    name: "Mechanical Keyboard",
    description: "Hot-swappable mechanical keyboard",
    priceInPaise: 7_999_00,
    stock: 25,
    status: PRODUCT_STATUS.ACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "prod_002",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse",
    priceInPaise: 2_499_00,
    stock: 40,
    status: PRODUCT_STATUS.ACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
] satisfies Product[];