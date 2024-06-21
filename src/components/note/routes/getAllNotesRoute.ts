import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../global/middlewares";

import { getAllNotesController } from "../controllers";

export const getAllNotesRoute = Router();

getAllNotesRoute.get(
  "/notes",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  getAllNotesController
);
