import { Router } from "express";
import { BlockLoggedOutAccount } from "../../../global/middlewares";

import { updateNoteController } from "../controllers";

export const updateNoteRoute = Router();

updateNoteRoute.put("/note", BlockLoggedOutAccount, updateNoteController);
