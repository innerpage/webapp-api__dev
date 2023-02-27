import { Router } from "express";
import { controller_Account_Logout } from "../../controllers";
import { Middleware_Block_Account_LoggedOut } from "../../../../global/middlewares";

export const route_Account_Logout = Router();

route_Account_Logout.post(
  "/logout",
  Middleware_Block_Account_LoggedOut,
  controller_Account_Logout
);
