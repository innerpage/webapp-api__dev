import { Router } from "express";
import { controller_Account_Logout } from "../../controllers";
import { guard_Against_LoggedOut } from "../../../../global/middlewares";

export const route_Account_Logout = Router();

route_Account_Logout.post(
  "/logout",
  guard_Against_LoggedOut,
  controller_Account_Logout
);
