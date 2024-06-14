import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import { IncludeRoutes } from "./global/helpers";
import { Var } from "./global/var";

import { HandleErrors } from "./global/middlewares";

const app = express();
const redisStore = connectRedis(session);

let corsOrigin: string =
  Var.node.env === "dev" ? Var.app.url.dev : Var.app.url.prod;
app.use(
  cors({
    origin: [corsOrigin],
    credentials: true,
  })
);

app.use(express.json());

if (Var.node.env === "prod") {
  app.set("trust proxy", 1);
}

const client = new Redis({
  host: Var.redis.host,
  port: +Var.redis.port,
});

app.use(
  session({
    secret: Var.node.express.session.secret!,
    name: Var.node.express.session.name,
    cookie: {
      maxAge: +Var.node.express.session.maxAge!,
      secure: Var.node.env === "prod" ? true : false,
      sameSite: Var.node.env === "prod" ? "none" : "lax",
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
