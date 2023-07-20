import app from "./app";
import http from "http";
import { config__Node, config__Sequelize } from "./config";
import { Helper__Include__ModelAssociations } from "./global/helpers";
import { Server, Socket } from "socket.io";

import {
  dal_Visit__Write__New_Visit,
  dal_Visit__Write__Status_Activity,
} from "./components/visit/dals";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  await config__Sequelize
    .authenticate()
    .then((result) => {
      console.log("SUCCESS: Database authenticated");
    })
    .catch((err) => {
      console.log("ERROR: Could not authenticate database");
      console.log(err);
    });

  Helper__Include__ModelAssociations();

  // await config__Sequelize
  //   .sync()
  //   .then((result) => {
  //     console.log("SUCCESS: Models synced");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log("ERROR: Could not sync models");
  //   });

  // alters table
  await config__Sequelize
    .sync({ alter: true })
    .then((result) => {
      console.log("SUCCESS: Models synced");
    })
    .catch((err) => {
      console.log(err);
      console.log("ERROR: Could not sync models");
    });

  const httpServer = http.createServer(app);

  // const io = new Server(httpServer, {
  //   cors: {
  //     origin: "*",
  //   },
  // });

  // io.on("connection", (socket: Socket) => {
  //   const email: any = socket.handshake.query.email;

  //   console.log(`${email} connected via ${socket.id}`);
  //   dal_Visit__Write__New_Visit(email, socket.id);

  //   socket.on("disconnect", () => {
  //     console.log(`Client disconnected: ${socket.id}`);
  //     dal_Visit__Write__Status_Activity(socket.id);
  //   });
  // });

  httpServer.listen(config__Node.port, () => {
    console.log(`Server is running on port: ${config__Node.port}`);
  });
})();
