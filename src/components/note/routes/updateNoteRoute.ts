import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../global/middlewares";

import { updateNoteController } from "../controllers";

export const updateNoteRoute = Router();

updateNoteRoute.put(
  "/note",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  updateNoteController
);
