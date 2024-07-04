import app from "./app";
import http from "http";
import { IncludeModelAssociations } from "./global/helpers";
import { Sequelize } from "./global/var";
import { Var } from "./global/var";
import { Server, Socket } from "socket.io";
import { readAccountByUserName } from "./components/account/dals";

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

  let activeUsers: number = 0;
  io.on("connection", async (socket: Socket) => {
    activeUsers = activeUsers + 1;
    console.log(`activeUsers: ${activeUsers}`);

    socket.on("disconnect", () => {
      activeUsers = activeUsers - 1;
      console.log(`activeUsers: ${activeUsers}`);
    });

    let isAdmin: boolean = false;
    let isAdminChecked: boolean = false;
    socket.on("getActiveUserCount", async (userName) => {
      if (!isAdminChecked) {
        let account: any = await readAccountByUserName(userName);
        if (account.is_admin) {
          isAdmin = true;
        }
        isAdminChecked = true;
      }

      if (!isAdmin) {
        return;
      }
      io.to(socket.id).emit("activeUserCount", activeUsers);
    });
  });

  nodeServer.listen(Var.node.port, () => {
    console.log(
      `${Var.app.emoji.success} Server is running on port: ${Var.node.port}`
    );
  });
})();
