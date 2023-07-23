import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
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
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  ExtractOriginFromRequest,
  validateInputsForStripeCreateSession,
  formatInputsForStripeCreateSession,
  stripeCreateSessionController
);
