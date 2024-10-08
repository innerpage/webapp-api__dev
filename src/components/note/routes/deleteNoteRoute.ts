import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../global/middlewares";
import {
  formatDeleteNotePayload,
  validateDeleteNotePayload,
} from "../middlewares";

import { deleteNoteController } from "../controllers";

export const deleteNoteRoute = Router();

deleteNoteRoute.delete(
  "/note",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  validateDeleteNotePayload,
  formatDeleteNotePayload,
  deleteNoteController
);
