import express from 'express';

const userRouter = express.Router();
userRouter.get("/", (req,res) => {
    res.send("Hello userRouter");
})
userRouter.post("/",(req,res) => {
    res.send("users Data received");
})

export default userRouter;