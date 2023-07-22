import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId__From__Request,
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__AccountNonExistence__By__AccountId,
  Middleware__Block__AccountDisabled__By__AccountId,
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
  Middleware__Extract__AccountId__From__Request,
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__AccountNonExistence__By__AccountId,
  Middleware__Block__AccountDisabled__By__AccountId,
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckSession,
  controller_Gateway__Stripe__Check_Session
);
