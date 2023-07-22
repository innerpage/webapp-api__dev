import app from "./app";
import http from "http";
import { config_Node, config_Sequelize } from "./config";
import { Helper__Include__Model_Associations } from "./global/helpers";
import { Server, Socket } from "socket.io";

import {
  dal_Visit__Write__New_Visit,
  dal_Visit__Write__Status_Activity,
} from "./components/visit/dals";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  await config_Sequelize
    .authenticate()
    .then((result) => {
      console.log("✅ Database authenticated");
    })
    .catch((err) => {
      console.log("❌ Could not authenticate database");
      console.log(err);
    });

  Helper__Include__Model_Associations();

  // await config_Sequelize
  //   .sync()
  //   .then((result) => {
  //     console.log("✅ Models synced");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log("❌ Could not sync models");
  //   });

  // alters table
  await config_Sequelize
    .sync({ alter: true })
    .then((result) => {
      console.log("✅ Models synced");
    })
    .catch((err) => {
      console.log(err);
      console.log("❌ Could not sync models");
    });

  const server__Node = http.createServer(app);

  // const io = new Server(server__Node, {
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

  server__Node.listen(config_Node.port, () => {
    console.log(`✅ Server is running on port: ${config_Node.port}`);
  });
})();
