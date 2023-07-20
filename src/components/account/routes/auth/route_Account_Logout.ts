import { Router } from "express";

import { Middleware__Block__Account_LoggedOut } from "../../../../global/middlewares";
import { controller_Account_Logout } from "../../controllers";

export const route_Account_Logout = Router();

route_Account_Logout.post(
  "/logout",
  Middleware__Block__Account_LoggedOut,
  controller_Account_Logout
);
