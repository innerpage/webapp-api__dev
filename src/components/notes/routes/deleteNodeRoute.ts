import { Router } from "express";
import { BlockLoggedOutAccount } from "../../../global/middlewares";

import { deleteNoteController } from "../controllers";

export const deleteNoteRoute = Router();

deleteNoteRoute.delete("/note", BlockLoggedOutAccount, deleteNoteController);
