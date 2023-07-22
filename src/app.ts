import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Helper__Include__Routes } from "./global/helpers";
import {
  Cors_Config,
  Node_Config,
  Redis_Config as client,
  ExpressSession_Config,
} from "./config";

import { Middleware__Handle__Errors } from "./global/middlewares";

const app = express();
const store_Redis = connectRedis(session);

if (Node_Config.env === "dev") {
  app.use(cors());
} else {
  app.use(cors(Cors_Config));
}

app.use(express.json());

if (Node_Config.env === "prod") {
  app.set("trust proxy", 1);
}

app.use(
  session({
    ...ExpressSession_Config,
    store: new store_Redis({ client }),
  })
);

Helper__Include__Routes().then((paths_RouteIndexes) => {
  paths_RouteIndexes.forEach((path_RouteIndex) => {
    import("./" + path_RouteIndex).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

app.use(Middleware__Handle__Errors);

export default app;
