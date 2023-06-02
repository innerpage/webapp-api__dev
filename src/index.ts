import app from "./app";
import http from "http";
import { nodeConfig, sequelize } from "./config";
import { Helper_Include_ModelAssociations } from "./global/helpers";

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
  CREATE ASSOCIATIONS
  -------------------*/
  Helper_Include_ModelAssociations();

  /* ------------------
  SYNC MODELS
  -------------------*/
  // await sequelize
  //   .sync({ alter: true })
  //   .then((result) => {
  //     console.log("SUCCESS: Models synced");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log("ERROR: Could not sync models");
  //   });
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
