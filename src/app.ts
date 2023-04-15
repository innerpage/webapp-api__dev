import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Helper_Include_Routes } from "./global/helpers";
import {
  corsConfig,
  nodeConfig,
  redisClient as client,
  sessionConfig,
} from "./config";

import { Middleware_Handle_Errors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

app.use(cors(corsConfig));

app.use(express.json());
if (nodeConfig.env === "prod") {
  app.set("trust proxy", 1);
}

app.use(
  session({
    ...sessionConfig,
    store: new redisStore({ client }),
  })
);

Helper_Include_Routes().then((pathArr) => {
  pathArr.forEach((path) => {
    import("./" + path).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

app.use(Middleware_Handle_Errors);

export default app;
