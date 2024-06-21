import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../global/middlewares";

import { getNoteController } from "../controllers";

export const getNoteRoute = Router();

getNoteRoute.get(
  "/note",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  getNoteController
);
