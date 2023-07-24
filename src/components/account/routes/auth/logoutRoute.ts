import { Router } from "express";

import { BlockLoggedOutAccount } from "../../../../global/middlewares";
import { controller_Account_Logout } from "../../controllers";

export const logoutRoute = Router();

logoutRoute.post("/logout", BlockLoggedOutAccount, controller_Account_Logout);
