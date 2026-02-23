import express from 'express';
import { getProductData, postProductData } from '../controllers/productController.js';

const productRouter = express.Router();
productRouter.get("/", getProductData);
productRouter.post("/", postProductData);

export default productRouter;