import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import { home, postSearch, result, getAdmin, postAdmin } from "./controller";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get(routes.home, home);
app.post(routes.search, postSearch);
app.get(routes.searched, result);
app.get(routes.admin, getAdmin);
app.post(routes.admin, postAdmin);

export default app;
