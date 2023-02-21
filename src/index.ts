import app from "./app";
import http from "http";
import { nodeConfig, sequelize } from "./config";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  /* ------------------
  AUTHENTICATE DATABASE
  -------------------*/
  await sequelize
    .authenticate()
    .then((result) => {
      console.log("SUCCESS: Database authenticated");
    })
    .catch((err) => {
      console.log("ERROR: Could not authenticate database");
      console.log(err);
    });

  /* ------------------
  SYNC MODELS
  -------------------*/
  await sequelize
    .sync()
    .then((result) => {
      console.log("SUCCESS: Models synced");
    })
    .catch((err) => {
      console.log(err);
      console.log("ERROR: Could not sync models");
    });

  /* --------------
  START SERVER
  ---------------*/
  const httpServer = http.createServer(app);
  httpServer.listen(nodeConfig.port, () => {
    console.log(`Server is running on port: ${nodeConfig.port}`);
  });
})();
