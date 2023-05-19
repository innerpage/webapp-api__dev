import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Stripe_CheckSession_Inputs,
  middleware_Format_Stripe_CheckSession_Inputs,
} from "../../middlewares";

import { controller_Stripe_CheckSession } from "../../controllers";

export const route_Stripe_CheckoutSession = Router();

route_Stripe_CheckoutSession.post(
  "/stripe-check-session",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Stripe_CheckSession_Inputs,
  middleware_Format_Stripe_CheckSession_Inputs,
  controller_Stripe_CheckSession
);
