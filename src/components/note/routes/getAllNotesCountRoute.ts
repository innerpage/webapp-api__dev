import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
} from "../../../global/middlewares";
import { getAllNotesCountController } from "../controllers";

export const getAllNotesCountRoute = Router();

getAllNotesCountRoute.get(
  "/notes-count",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
  getAllNotesCountController
);
