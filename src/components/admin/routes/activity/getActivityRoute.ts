import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
} from "../../../../global/middlewares";
import {
  validateActivityPayload,
  formatActivityPayload,
} from "../../middlewares";
import { getActivityController } from "../../controllers";

export const getActivityRoute = Router();

getActivityRoute.post(
  "/activity",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
  validateActivityPayload,
  formatActivityPayload,
  getActivityController
);
