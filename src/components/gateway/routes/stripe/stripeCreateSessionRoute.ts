import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountById,
  BlockDeletedAccountById,
} from "../../../../global/middlewares";

import {
  validateInputsForStripeCreateSession,
  formatInputsForStripeCreateSession,
} from "../../middlewares";

import { stripeCreateSessionController } from "../../controllers";

export const stripeCreateSessionRoute = Router();

stripeCreateSessionRoute.post(
  "/stripe-create-session",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockDeletedAccountById,
  ExtractOriginFromRequest,
  validateInputsForStripeCreateSession,
  formatInputsForStripeCreateSession,
  stripeCreateSessionController
);
