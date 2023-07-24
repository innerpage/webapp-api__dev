import { Router } from "express";

import { BlockLoggedOutAccountMiddleware } from "../../../../global/middlewares";
import { logoutController } from "../../controllers";

export const logoutRoute = Router();

logoutRoute.post("/logout", BlockLoggedOutAccountMiddleware, logoutController);
