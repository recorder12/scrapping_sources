import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import csp from "helmet-csp";
import cors from "cors";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.use(helmet());

app.use(
  //csp policy set up
  csp({
    directives: {
      defaultSrc: ["*", "http://localhost:4000"],
      scriptSrc: ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["*"],
      imgSrc: ["*", "'self'", "data: http:"],
      connectSrc: ["*", "'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
    reportOnly: false,
  })
);
app.use(cors()); //CORS request configure

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, cors(), userRouter);
app.use(routes.api, cors(), apiRouter);

export default app;
