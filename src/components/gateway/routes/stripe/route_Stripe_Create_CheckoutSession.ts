import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Stripe_CheckoutSession_Inputs,
  middleware_Format_Stripe_CheckoutSession_Inputs,
} from "../../middlewares";

import { controller_Stripe_Create_CheckoutSession } from "../../controllers";

export const route_Stripe_Create_CheckoutSession = Router();

route_Stripe_Create_CheckoutSession.post(
  "/stripe-create-session",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
  Middleware__Extract__Origin_From_Request,
  middleware_Validate_Stripe_CheckoutSession_Inputs,
  middleware_Format_Stripe_CheckoutSession_Inputs,
  controller_Stripe_Create_CheckoutSession
);
