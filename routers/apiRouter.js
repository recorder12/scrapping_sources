import express from "express";
import routes from "../routes";
import { postSearch, postUpdate } from "../controllers/controller";

const apiRouter = express.Router();
//DB API
apiRouter.post(routes.search, postSearch);
//admin API
apiRouter.post(routes.update, postUpdate);

export default apiRouter;
