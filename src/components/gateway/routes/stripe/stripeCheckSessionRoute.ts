import { Router } from "express";

import {
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  ExtractOriginFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  BlockDisabledAccountByIdMiddleware,
} from "../../../../global/middlewares";

import {
  validateInputsForStripeCheckSessionMiddleware,
  formatInputsForStripeCheckSessionMiddleware,
} from "../../middlewares";

import { stripeCheckSessionController } from "../../controllers";

export const stripeCheckSessionRoute = Router();

stripeCheckSessionRoute.post(
  "/stripe-check-session",
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  ExtractOriginFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  BlockDisabledAccountByIdMiddleware,
  validateInputsForStripeCheckSessionMiddleware,
  formatInputsForStripeCheckSessionMiddleware,
  stripeCheckSessionController
);
