import express from "express";
import cors from "cors";
import { includeRoutesHelper } from "./helpers";
import { corsConfig } from "./config";

const app = express();
app.use(cors(corsConfig));
app.use(express.json());

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
