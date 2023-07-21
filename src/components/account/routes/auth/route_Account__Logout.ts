import { Router } from "express";

import { Middleware__Block__Account__Logged_Out } from "../../../../global/middlewares";
import { controller_Account__Logout } from "../../controllers";

export const route_Account__Logout = Router();

route_Account__Logout.post(
  "/logout",
  Middleware__Block__Account__Logged_Out,
  controller_Account__Logout
);
