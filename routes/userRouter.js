import express from 'express';
import { getUserData, postUserData } from '../controllers/userController.js';

const userRouter = express.Router();
userRouter.get("/", getUserData);
userRouter.post("/", postUserData);

export default userRouter;