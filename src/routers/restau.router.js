import express from "express";
import { blame, getLikeByRes} from '../controllers/restau.controller.js';

const restauranceRouter = express.Router();
restauranceRouter.get('/getLikeByRes/:res_id',getLikeByRes)
restauranceRouter.get('/getBlame/:res_id',blame)
export default restauranceRouter;