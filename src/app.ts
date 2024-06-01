import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import { IncludeRoutes } from "./global/helpers";
import { AppVar } from "./global/vars";

import { HandleErrors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

let corsOrigin: string =
  AppVar.node.env === "dev" ? AppVar.app.url.dev : AppVar.app.url.prod;
app.use(
  cors({
    origin: [corsOrigin],
    credentials: true,
  })
);

app.use(express.json());

if (AppVar.node.env === "prod") {
  app.set("trust proxy", 1);
}

const client = new Redis({
  host: AppVar.redis.host,
  port: +AppVar.redis.port,
});

app.use(
  session({
    secret: AppVar.node.express.session.secret!,
    name: AppVar.node.express.session.name,
    cookie: {
      maxAge: +AppVar.node.express.session.maxAge!,
      secure: AppVar.node.env === "prod" ? true : false,
      sameSite: AppVar.node.env === "prod" ? "none" : "lax",
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
