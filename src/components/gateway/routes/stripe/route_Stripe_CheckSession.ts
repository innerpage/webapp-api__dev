import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Stripe_CheckSession_Inputs,
  middleware_Format_Stripe_CheckSession_Inputs,
} from "../../middlewares";

import { controller_Stripe_CheckSession } from "../../controllers";

export const route_Stripe_CheckoutSession = Router();

route_Stripe_CheckoutSession.post(
  "/stripe-check-session",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
  middleware_Validate_Stripe_CheckSession_Inputs,
  middleware_Format_Stripe_CheckSession_Inputs,
  controller_Stripe_CheckSession
);
