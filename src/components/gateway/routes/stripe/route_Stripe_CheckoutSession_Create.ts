import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import { controller_Stripe_CheckoutSession_Create } from "../../controllers";

export const route_Stripe_CheckoutSession_Create = Router();

route_Stripe_CheckoutSession_Create.post(
  "/stripe-create-checkout-session",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Extract_Origin,
  controller_Stripe_CheckoutSession_Create
);
