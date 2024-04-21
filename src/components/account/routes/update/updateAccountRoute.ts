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
  validateAccountUpdatePayloadMiddleware,
  formatAccountUpdatePayloadMiddleware,
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
  validateAccountUpdatePayloadMiddleware,
  formatAccountUpdatePayloadMiddleware,
  updateAccountController
);
