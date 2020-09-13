import express from "express";
import routes from "../routes";
import { home, admin, postUpdateCommmand } from "../controllers/controller";
import cors from "cors";

const userRouter = express.Router();
//Home
userRouter.get(routes.home, cors(), home);
//Admin Page
userRouter.get(routes.admin, postUpdateCommmand);

export default userRouter;
