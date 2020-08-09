import express from "express";
import routes from "../routes";
import { home } from "../controllers/controller";

const userRouter = express.Router();

userRouter.get(routes.home, home);

export default userRouter;
