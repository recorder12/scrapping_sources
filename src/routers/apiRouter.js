import express from "express";
import routes from "../routes";
import { postSearchDB, postUpdateCommmand } from "../controllers/controller";

const apiRouter = express.Router();
//DB API
apiRouter.post(routes.search, postSearchDB);
//admin API
apiRouter.post(routes.update, postUpdateCommmand);

export default apiRouter;
