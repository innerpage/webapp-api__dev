import { Router } from "express";

import {
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  ExtractOriginFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  BlockDisabledAccountByIdMiddleware,
} from "../../../../global/middlewares";

import {
  validateInputsForStripeCreateSessionMiddleware,
  formatInputsForStripeCreateSessionMiddleware,
} from "../../middlewares";

import { stripeCreateSessionController } from "../../controllers";

export const stripeCreateSessionRoute = Router();

stripeCreateSessionRoute.post(
  "/stripe-create-session",
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  BlockDisabledAccountByIdMiddleware,
  ExtractOriginFromRequestMiddleware,
  validateInputsForStripeCreateSessionMiddleware,
  formatInputsForStripeCreateSessionMiddleware,
  stripeCreateSessionController
);
