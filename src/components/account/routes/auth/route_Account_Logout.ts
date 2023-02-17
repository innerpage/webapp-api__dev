import { Router } from "express";
import { controller_Account_Logout } from "../../controllers";

export const route_Account_Logout = Router();

route_Account_Logout.post("/logout", controller_Account_Logout);
