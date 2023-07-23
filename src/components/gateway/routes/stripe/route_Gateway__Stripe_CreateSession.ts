import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  ExtractOriginFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Gateway_Validate_Inputs_For_Stripe_CreateSession,
  middleware_Gateway_Format_Inputs_For_Stripe_CreateSession,
} from "../../middlewares";

import { controller_Gateway_Stripe_CreateSession } from "../../controllers";

export const route_Gateway_Stripe_CreateSession = Router();

route_Gateway_Stripe_CreateSession.post(
  "/stripe-create-session",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  ExtractOriginFromRequest,
  middleware_Gateway_Validate_Inputs_For_Stripe_CreateSession,
  middleware_Gateway_Format_Inputs_For_Stripe_CreateSession,
  controller_Gateway_Stripe_CreateSession
);
