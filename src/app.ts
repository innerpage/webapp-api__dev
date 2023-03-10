import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Helper_Routes_Include } from "./global/helpers";
import {
  corsConfig,
  nodeConfig,
  redisClient as client,
  sessionConfig,
} from "./config";

const app = express();
const redisStore = connectRedis(session);

app.use(express.json());
if (nodeConfig.env === "prod") {
  app.set("trust proxy", 1);
  console.log();
  console.log("attempt: 2");
  console.log();
}

console.log("sessionConfig");
console.log(sessionConfig);
app.use(
  session({
    ...sessionConfig,
    store: new redisStore({ client }),
  })
);
app.use(cors(corsConfig));

Helper_Routes_Include().then((pathArr) => {
  pathArr.forEach((path) => {
    import("./" + path).then((route) => {
      for (const property in route) {
        app.use(route[property]);
      }
    });
  });
});

export default app;
