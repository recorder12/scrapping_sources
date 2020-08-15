import express from "express";
import routes from "../routes";
import { home, admin } from "../controllers/controller";

const userRouter = express.Router();
//Home
userRouter.get(routes.home, home);
//Admin Page
userRouter.get(routes.admin, admin);

export default userRouter;
