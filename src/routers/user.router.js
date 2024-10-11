import express from "express";
import { getBlame, getLikesByUser, order } from "../controllers/user.controller.js";
const userRouter = express.Router();
// user
userRouter.get('/getLikeUser/:user_id', getLikesByUser);
userRouter.get('/getBlameByUser/:user_id', getBlame);
userRouter.get('/getorder/:user_id', order); // Đường dẫn đúng

export default userRouter