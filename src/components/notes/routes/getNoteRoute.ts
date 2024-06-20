import { Router } from "express";
import { BlockLoggedOutAccount } from "../../../global/middlewares";

import { getNoteController } from "../controllers";

export const getNoteRoute = Router();

getNoteRoute.get("/note", BlockLoggedOutAccount, getNoteController);
