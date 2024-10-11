import express from "express";
import restauranceRouter from "./restau.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();
rootRouter.use('/res',restauranceRouter)
rootRouter.use('/user',userRouter)

// lấy like theo user_id
//http://localhost:3303/user/getLikeUser/2
//like theo nha hang 
//http://localhost:3303/res/getLikeByRes/3
// lấy blame trong nhà hàng theo id nhà hàng ;
// http://localhost:3303/res/getBlame/2
// lấy blame theo user
// http://localhost:3303/user/getorder/3
// lấy order với user
export default rootRouter;