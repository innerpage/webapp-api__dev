import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../global/middlewares";
import {
  formatUpdateNotePayload,
  validateUpdateNotePayload,
} from "../middlewares";

import { updateNoteController } from "../controllers";

export const updateNoteRoute = Router();

updateNoteRoute.put(
  "/note",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  validateUpdateNotePayload,
  formatUpdateNotePayload,
  updateNoteController
);
