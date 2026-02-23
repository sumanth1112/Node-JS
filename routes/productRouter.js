import express from 'express';

const productRouter = express.Router();
productRouter.get("/", (req,res) => {
    res.send("Hello productRouter");
})

productRouter.post("/",(req,res) => {
    res.send("Product data received");
})

export default productRouter;