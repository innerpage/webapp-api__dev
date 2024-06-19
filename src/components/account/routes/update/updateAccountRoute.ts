import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../../global/middlewares";
import {
  validateAccountUpdatePayload,
  formatAccountUpdatePayload,
} from "../../middlewares";
import { updateAccountController } from "../../controllers";

export const updateAccountRoute = Router();

updateAccountRoute.put(
  "/account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  validateAccountUpdatePayload,
  formatAccountUpdatePayload,
  updateAccountController
);
