import app from "./app";
import http from "http";
import { nodeConfig, sequelize } from "./config";
import { Helper_Include_ModelAssociations } from "./global/helpers";
import { Server, Socket } from "socket.io";

import {
  dal_Visit_Write_NewVisit,
  dal_Visit_Update_ActiveStatus,
} from "./components/visit/dals";

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

  /* --------
  INIT SOCKET
  ---------*/
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: Socket) => {
    const email: any = socket.handshake.query.email;

    console.log(`${email} connected via ${socket.id}`);
    dal_Visit_Write_NewVisit(email, socket.id);

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
      dal_Visit_Update_ActiveStatus(socket.id);
    });
  });

  httpServer.listen(nodeConfig.port, () => {
    console.log(`Server is running on port: ${nodeConfig.port}`);
  });
})();
