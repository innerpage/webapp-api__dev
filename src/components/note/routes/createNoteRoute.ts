import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../global/middlewares";

import { createNoteController } from "../controllers";

export const createNoteRoute = Router();

createNoteRoute.post(
  "/note",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  createNoteController
);
