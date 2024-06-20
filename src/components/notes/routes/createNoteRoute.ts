import { Router } from "express";
import { BlockLoggedOutAccount } from "../../../global/middlewares";

import { createNoteController } from "../controllers";

export const createNoteRoute = Router();

createNoteRoute.post("/note", BlockLoggedOutAccount, createNoteController);
