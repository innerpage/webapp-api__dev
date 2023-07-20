import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
} from "../../../../global/middlewares";

import {
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckoutSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckoutSession,
} from "../../middlewares";

import { controller_Gateway__Stripe__Create_Session } from "../../controllers";

export const route_Gateway__Stripe__Create_Session = Router();

route_Gateway__Stripe__Create_Session.post(
  "/stripe-create-session",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
  Middleware__Extract__Origin_From_Request,
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckoutSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckoutSession,
  controller_Gateway__Stripe__Create_Session
);
