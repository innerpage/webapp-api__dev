import { Router } from "express";

import { BlockLoggedOutAccount } from "../../../../global/middlewares";
import { controller_Account_Logout } from "../../controllers";

export const route_Account_Logout = Router();

route_Account_Logout.post(
  "/logout",
  BlockLoggedOutAccount,
  controller_Account_Logout
);
