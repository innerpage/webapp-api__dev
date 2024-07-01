import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
} from "../../../global/middlewares";
import { getNoteCreationCountController } from "../controllers";

export const getNoteCreationCountRoute = Router();

getNoteCreationCountRoute.get(
  "/note-creation-count",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
  getNoteCreationCountController
);
