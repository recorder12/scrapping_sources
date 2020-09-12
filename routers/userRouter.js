import express from "express";
import routes from "../routes";
import { home, admin } from "../controllers/controller";
import cors from "cors";

const userRouter = express.Router();
//Home
userRouter.get(routes.home, cors(), home);
//Admin Page
userRouter.get(routes.admin, admin);

export default userRouter;
