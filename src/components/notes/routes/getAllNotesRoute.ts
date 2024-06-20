import { Router } from "express";
import { BlockLoggedOutAccount } from "../../../global/middlewares";

import { getAllNotesController } from "../controllers";

export const getAllNotesRoute = Router();

getAllNotesRoute.get("/notes", BlockLoggedOutAccount, getAllNotesController);
