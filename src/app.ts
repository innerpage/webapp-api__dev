import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { IncludeRoutesHelper } from "./global/helpers";
import {
  CorsConfig,
  NodeConfig,
  RedisConfig as client,
  ExpressSessionConfig,
} from "./config";

import { HandleErrorsMiddleware } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

if (NodeConfig.env === "dev") {
  app.use(cors());
} else {
  app.use(cors(CorsConfig));
}

app.use(express.json());

if (NodeConfig.env === "prod") {
  app.set("trust proxy", 1);
}

app.use(
  session({
    ...ExpressSessionConfig,
    store: new redisStore({ client }),
  })
);

IncludeRoutesHelper().then((routeIndexPaths: any) => {
  routeIndexPaths.forEach((routeIndexPath: any) => {
    import("./" + routeIndexPath).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

app.use(HandleErrorsMiddleware);

export default app;
