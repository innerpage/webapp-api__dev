import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountById,
} from "../../../../global/middlewares";

import {
  validateStripeCreateSessionPayload,
  formatStripeCreateSessionPayload,
} from "../../middlewares";

import { stripeCreateSessionController } from "../../controllers";

export const stripeCreateSessionRoute = Router();

stripeCreateSessionRoute.post(
  "/stripe-create-session",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  ExtractOriginFromRequest,
  validateStripeCreateSessionPayload,
  formatStripeCreateSessionPayload,
  stripeCreateSessionController
);
