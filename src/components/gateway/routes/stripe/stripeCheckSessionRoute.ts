import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountById,
} from "../../../../global/middlewares";

import {
  validateStripeCheckSessionPayload,
  formatStripeCheckSessionPayload,
} from "../../middlewares";

import { stripeCheckSessionController } from "../../controllers";

export const stripeCheckSessionRoute = Router();

stripeCheckSessionRoute.post(
  "/stripe-check-session",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountById,
  validateStripeCheckSessionPayload,
  formatStripeCheckSessionPayload,
  stripeCheckSessionController
);
