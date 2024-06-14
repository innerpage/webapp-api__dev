import { Router } from "express";
import { BlockLoggedOutAccount } from "../../../../global/middlewares";
import { logoutController } from "../../controllers";

export const logoutRoute = Router();

logoutRoute.post("/logout", BlockLoggedOutAccount, logoutController);
