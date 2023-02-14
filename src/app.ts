import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { includeRoutesHelper } from "./helpers";
import { corsConfig, redisClient as client, sessionConfig } from "./config";

const app = express();
const redisStore = connectRedis(session);

app.use(cors(corsConfig));
app.use(express.json());
app.use(
  session({
    ...sessionConfig,
    store: new redisStore({ client }),
  })
);

includeRoutesHelper().then((pathArr) => {
  pathArr.forEach((path) => {
    import("./" + path).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

export default app;
