import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

const app = express();
app.listen(8080, () => {
    console.log("Server started")
})
// const userRouter = express.Router();
// const productRouter = express.Router();

// userRouter.get("/", (req,res) => {
//     res.send("Hello userRouter");
// })
// userRouter.post("/",(req,res) => {
//     res.send("users Data received");
// })

// productRouter.get("/", (req,res) => {
//     res.send("Hello productRouter");
// })

// productRouter.post("/",(req,res) => {
//     res.send("Product data received");
// })
app.use("/api/users",userRouter);
app.use("/api/products", productRouter);

// let users = [
//     {
//         id:1,
//         name:"Ekshin",
//         email:"ekshin@gmail.com",
//         role:"student"
//     },
//     {
//         id:2,
//         name:"Ajay",
//         email:"ajay@gmail.com",
//         role:"student"
//     },
//     {
//         id:3,
//         name:"Sumanth",
//         email:"sumanth@gmail.com",
//         role:"student"
//     }
// ]