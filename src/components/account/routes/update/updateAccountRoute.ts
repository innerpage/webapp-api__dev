import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
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
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  validateAccountUpdatePayload,
  formatAccountUpdatePayload,
  updateAccountController
);
