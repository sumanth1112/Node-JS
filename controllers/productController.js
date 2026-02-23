import { products } from '../models/productmodel.js';

export const getProductData = (req, res) => {
    res.json(products);
}

export const postProductData = (req, res) => {
    res.send("Product Data received from controller");
}