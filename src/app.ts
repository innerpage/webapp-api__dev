import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import { IncludeRoutes } from "./global/helpers";
import { Vars } from "./global/vars";

import { HandleErrors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

let corsOrigin: string =
  Vars.node.env === "dev" ? Vars.app.url.dev : Vars.app.url.prod;
app.use(
  cors({
    origin: [corsOrigin],
    credentials: true,
  })
);

app.use(express.json());

if (Vars.node.env === "prod") {
  app.set("trust proxy", 1);
}

const client = new Redis({
  host: Vars.redis.host,
  port: +Vars.redis.port,
});

app.use(
  session({
    secret: Vars.node.express.session.secret!,
    name: Vars.node.express.session.name,
    cookie: {
      maxAge: +Vars.node.express.session.maxAge!,
      secure: Vars.node.env === "prod" ? true : false,
      sameSite: Vars.node.env === "prod" ? "none" : "lax",
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
