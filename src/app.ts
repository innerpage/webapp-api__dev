import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Helper__Include__Routes } from "./global/helpers";
import {
  config__Cors,
  config__Node,
  config__Redis as client,
  config__Session,
} from "./config";

import { Middleware__Handle__Errors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

if (config__Node.env === "dev") {
  app.use(cors());
} else {
  app.use(cors(config__Cors));
}

app.use(express.json());
if (config__Node.env === "prod") {
  app.set("trust proxy", 1);
}

app.use(
  session({
    ...config__Session,
    store: new redisStore({ client }),
  })
);

Helper__Include__Routes().then((pathArr) => {
  pathArr.forEach((path) => {
    import("./" + path).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

app.use(Middleware__Handle__Errors);

export default app;
