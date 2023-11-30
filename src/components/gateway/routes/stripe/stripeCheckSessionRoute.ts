import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountById,
  BlockDeletedAccountById,
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
  BlockNonExistentAccountById,
  BlockDeletedAccountById,
  validateInputsForStripeCheckSession,
  formatInputsForStripeCheckSession,
  stripeCheckSessionController
);
