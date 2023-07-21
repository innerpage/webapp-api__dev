import { Router } from "express";

import {
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Account_Id__From__Request,
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__Account_Non_Existence__By__Account_Id,
  Middleware__Block__Account_Disabled__By__AccountId,
} from "../../../../global/middlewares";

import {
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckoutSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckoutSession,
} from "../../middlewares";

import { controller_Gateway__Stripe__Create_Session } from "../../controllers";

export const route_Gateway__Stripe__Create_Session = Router();

route_Gateway__Stripe__Create_Session.post(
  "/stripe-create-session",
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Account_Id__From__Request,
  Middleware__Block__Account_Non_Existence__By__Account_Id,
  Middleware__Block__Account_Disabled__By__AccountId,
  Middleware__Extract__Origin__From__Request,
  middleware_Gateway__Validate__Inputs_For__Stripe_CheckoutSession,
  middleware_Gateway__Format__Inputs_For__Stripe_CheckoutSession,
  controller_Gateway__Stripe__Create_Session
);
