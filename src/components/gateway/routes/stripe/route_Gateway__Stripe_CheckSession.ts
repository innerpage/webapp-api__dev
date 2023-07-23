import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Gateway_Validate_Inputs_For_Stripe_CheckSession,
  middleware_Gateway_Format_Inputs_For_Stripe_CheckSession,
} from "../../middlewares";

import { controller_Gateway_Stripe_CheckSession } from "../../controllers";

export const route_Gateway_Stripe_CheckSession = Router();

route_Gateway_Stripe_CheckSession.post(
  "/stripe-check-session",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  middleware_Gateway_Validate_Inputs_For_Stripe_CheckSession,
  middleware_Gateway_Format_Inputs_For_Stripe_CheckSession,
  controller_Gateway_Stripe_CheckSession
);
