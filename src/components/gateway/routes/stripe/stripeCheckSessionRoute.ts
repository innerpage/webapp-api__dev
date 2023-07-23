import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
} from "../../../../global/middlewares";

import {
  validateInputsForStripeCheckSession,
  formatInputsForStripeCheckSession,
} from "../../middlewares";

import { stripeCheckSessionController } from "../../controllers";

export const stripeCheckSessionRoute = Router();

stripeCheckSessionRoute.post(
  "/stripe-check-session",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  validateInputsForStripeCheckSession,
  formatInputsForStripeCheckSession,
  stripeCheckSessionController
);
