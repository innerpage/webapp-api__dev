import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { IncludeRoutes } from "./global/helpers";
import {
  Cors_Config,
  NodeConfig,
  Redis_Config as client,
  ExpressSession_Config,
} from "./config";

import { Middleware_Handle_Errors } from "./global/middlewares";

const app = express();
const store_Redis = connectRedis(session);

if (NodeConfig.env === "dev") {
  app.use(cors());
} else {
  app.use(cors(Cors_Config));
}

app.use(express.json());

if (NodeConfig.env === "prod") {
  app.set("trust proxy", 1);
}

app.use(
  session({
    ...ExpressSession_Config,
    store: new store_Redis({ client }),
  })
);

IncludeRoutes().then((routeIndexPaths: any) => {
  routeIndexPaths.forEach((routeIndexPath: any) => {
    import("./" + routeIndexPath).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

app.use(Middleware_Handle_Errors);

export default app;
