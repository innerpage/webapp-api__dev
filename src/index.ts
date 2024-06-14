import app from "./app";
import http from "http";
import { IncludeModelAssociations } from "./global/helpers";
import { Sequelize } from "./global/var";
import { Server, Socket } from "socket.io";
import { Var } from "./global/var";
import { writeNewVisit, writeVisitStatus } from "./components/visit/dals";
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

  io.on("connection", (socket: Socket) => {
    const email: any = socket.handshake.query.email;
    console.log(`${Var.app.emoji.success} ${email} connected via ${socket.id}`);
    writeNewVisit(email, socket.id, socket.handshake.address);
    socket.on("disconnect", () => {
      console.log(`${Var.app.emoji.failure} Client disconnected: ${socket.id}`);
      writeVisitStatus(socket.id);
    });
  });

  nodeServer.listen(Var.node.port, () => {
    console.log(
      `${Var.app.emoji.success} Server is running on port: ${Var.node.port}`
    );
  });
})();
