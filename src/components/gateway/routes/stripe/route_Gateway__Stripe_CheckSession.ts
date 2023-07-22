import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_Id_Account_From_Request,
  Middleware_Extract_Origin_From_Request,
  Middleware_Block_Account_NonExistence_By_Id_Account,
  Middleware_Block_Account_Disabled_By_Id_Account,
} from "../../../../global/middlewares";

import {
  middleware_Gateway_Validate_Inputs_For_Stripe_CheckSession,
  middleware_Gateway_Format_Inputs_For_Stripe_CheckSession,
} from "../../middlewares";

import { controller_Gateway_Stripe_CheckSession } from "../../controllers";

export const route_Gateway_Stripe_CheckSession = Router();

route_Gateway_Stripe_CheckSession.post(
  "/stripe-check-session",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_Id_Account_From_Request,
  Middleware_Extract_Origin_From_Request,
  Middleware_Block_Account_NonExistence_By_Id_Account,
  Middleware_Block_Account_Disabled_By_Id_Account,
  middleware_Gateway_Validate_Inputs_For_Stripe_CheckSession,
  middleware_Gateway_Format_Inputs_For_Stripe_CheckSession,
  controller_Gateway_Stripe_CheckSession
);
