import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Helper_Include_Routes } from "./global/helpers";
import {
  config_Cors,
  config_Node,
  config_Redis as client,
  config_Session,
} from "./config";

import { Middleware_Handle_Errors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

if (config_Node.env === "dev") {
  app.use(cors());
} else {
  app.use(cors(config_Cors));
}

app.use(express.json());
if (config_Node.env === "prod") {
  app.set("trust proxy", 1);
}

app.use(
  session({
    ...config_Session,
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
