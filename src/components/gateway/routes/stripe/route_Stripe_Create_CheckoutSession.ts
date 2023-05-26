import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Stripe_CheckoutSession_Inputs,
  middleware_Format_Stripe_CheckoutSession_Inputs,
} from "../../middlewares";

import { controller_Stripe_Create_CheckoutSession } from "../../controllers";

export const route_Stripe_Create_CheckoutSession = Router();

route_Stripe_Create_CheckoutSession.post(
  "/stripe-create-checkout-session",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Extract_Origin,
  middleware_Validate_Stripe_CheckoutSession_Inputs,
  middleware_Format_Stripe_CheckoutSession_Inputs,
  controller_Stripe_Create_CheckoutSession
);
