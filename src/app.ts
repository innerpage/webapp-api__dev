import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Helper__Include__Routes } from "./global/helpers";
import {
  config_Cors,
  config_Node,
  config_Redis as client,
  config_ExpressSession,
} from "./config";

import { Middleware__Handle__Errors } from "./global/middlewares";

const app = express();
const store__Redis = connectRedis(session);

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
    ...config_ExpressSession,
    store: new store__Redis({ client }),
  })
);

Helper__Include__Routes().then((paths__RouteIndexes) => {
  paths__RouteIndexes.forEach((path__RouteIndex) => {
    import("./" + path__RouteIndex).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

app.use(Middleware__Handle__Errors);

export default app;
