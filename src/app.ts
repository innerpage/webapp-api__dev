import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import { IncludeRoutes } from "./global/helpers";
import { ConfigVar } from "./global/vars";

import { HandleErrors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

let corsOrigin: string =
  ConfigVar.node.env === "dev" ? ConfigVar.app.url.dev : ConfigVar.app.url.prod;
app.use(
  cors({
    origin: [corsOrigin],
    credentials: true,
  })
);

app.use(express.json());

if (ConfigVar.node.env === "prod") {
  app.set("trust proxy", 1);
}

const client = new Redis({
  host: ConfigVar.redis.host,
  port: +ConfigVar.redis.port,
});

app.use(
  session({
    secret: ConfigVar.node.express.session.secret!,
    name: ConfigVar.node.express.session.name,
    cookie: {
      maxAge: +ConfigVar.node.express.session.maxAge!,
      secure: ConfigVar.node.env === "prod" ? true : false,
      sameSite: ConfigVar.node.env === "prod" ? "none" : "lax",
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new redisStore({ client }),
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

app.use(HandleErrors);

export default app;
