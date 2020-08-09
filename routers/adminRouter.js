import express from "express";
import routes from "../routes";
import { postUpdate, getLogin, postLogin } from "../controllers/controller";
import apiRouter from "./apiRouter";

const adminRouter = express.Router();

apiRouter.get(routes.login, getLogin);
apiRouter.post(routes.login, postLogin);
apiRouter.post(routes.update, postUpdate);

export default adminRouter;
