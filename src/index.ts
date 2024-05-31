import app from "./app";
import http from "http";
import { IncludeModelAssociations } from "./global/helpers";
import { Sequelize } from "./global/vars";
import { Server, Socket } from "socket.io";
import { ConfigVar } from "./global/vars";

import { writeNewVisit, writeVisitStatus } from "./components/visit/dals";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  await Sequelize.authenticate()
    .then((result) => {
      console.log("✅ Database authenticated");
    })
    .catch((err) => {
      console.log("❌ Could not authenticate database");
      console.log(err);
    });

  IncludeModelAssociations();

  // await Sequelize.sync()
  //   .then((result) => {
  //     console.log("✅ Models synced");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log("❌ Could not sync models");
  //   });

  // Alters table
  await Sequelize.sync({ alter: true })
    .then((result) => {
      console.log("✅ Models altered & synced");
    })
    .catch((err) => {
      console.log(err);
      console.log("❌ Could not sync models");
    });

  const nodeServer = http.createServer(app);

  const io = new Server(nodeServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: Socket) => {
    const email: any = socket.handshake.query.email;

    console.log(`✅ ${email} connected via ${socket.id}`);

    writeNewVisit(email, socket.id, socket.handshake.address);

    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
      writeVisitStatus(socket.id);
    });
  });

  nodeServer.listen(ConfigVar.node.port, () => {
    console.log(`✅ Server is running on port: ${ConfigVar.node.port}`);
  });
})();
