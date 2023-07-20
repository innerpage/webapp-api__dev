import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
} from "../../../../global/middlewares";

import {
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckSession,
} from "../../middlewares";

import { controller_Gateway__Stripe__Check_Session } from "../../controllers";

export const route_Gateway__Stripe__Check_Session = Router();

route_Gateway__Stripe__Check_Session.post(
  "/stripe-check-session",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckSession,
  controller_Gateway__Stripe__Check_Session
);
