import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import csp from "helmet-csp";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import { test } from "./controllers/controller";

const app = express();

app.use(helmet());

app.use(
  csp({
    directives: {
      defaultSrc: ["*", "http://localhost:4000"],
      scriptSrc: ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'"],
      imgSrc: ["*", "'self'", "data: http:"],
      connectSrc: ["*", "'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
    reportOnly: false,
  })
);

app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, userRouter);
app.use(routes.api, apiRouter);

export default app;
