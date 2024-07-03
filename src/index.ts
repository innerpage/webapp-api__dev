import app from "./app";
import http from "http";
import { IncludeModelAssociations } from "./global/helpers";
import { Sequelize } from "./global/var";
import { Var } from "./global/var";
import { Server, Socket } from "socket.io";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  await Sequelize.authenticate()
    .then((result) => {
      console.log(`${Var.app.emoji.success} Database authenticated`);
    })
    .catch((err) => {
      console.log(`${Var.app.emoji.failure} Could not authenticate database`);
      console.log(err);
    });

  IncludeModelAssociations();

  // await Sequelize.sync()
  //   .then((result) => {
  //     console.log(`${Var.app.emoji.success} Models synced`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log(`${Var.app.emoji.failure} Could not sync models`);
  //   });

  // Alters table
  await Sequelize.sync({ alter: true })
    .then((result) => {
      console.log(`${Var.app.emoji.success} Models altered & synced`);
    })
    .catch((err) => {
      console.log(err);
      console.log(`${Var.app.emoji.failure} Could not sync models`);
    });

  const nodeServer = http.createServer(app);

  const io = new Server(nodeServer, {
    cors: {
      origin: "*",
    },
  });

  let activeConnections: number = 0;
  io.on("connection", (socket: Socket) => {
    activeConnections = activeConnections + 1;
    console.log(`Client connected, activeConnections: ${activeConnections}`);
    socket.on("disconnect", () => {
      activeConnections = activeConnections - 1;
      console.log(
        `Client disconnected, activeConnections: ${activeConnections}`
      );
    });
  });

  nodeServer.listen(Var.node.port, () => {
    console.log(
      `${Var.app.emoji.success} Server is running on port: ${Var.node.port}`
    );
  });
})();
