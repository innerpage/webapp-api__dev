import { Router } from "express";
import {
  Middleware__Block__Account__Logged_Out,
  Middleware__Block__AccountNonExistence__By__Email,
} from "../../../../global/middlewares";
import {
  middleware_Account__Validate__Inputs_For__EmailVerification,
  middleware_Account__Format__Inputs_For__EmailVerification,
} from "../../middlewares";
import { controller_Account__Verify__Email } from "../../controllers";

export const route_Account__Verify__Email = Router();

route_Account__Verify__Email.post(
  "/verify-email",
  middleware_Account__Validate__Inputs_For__EmailVerification,
  middleware_Account__Format__Inputs_For__EmailVerification,
  Middleware__Block__AccountNonExistence__By__Email,
  Middleware__Block__Account__Logged_Out,
  controller_Account__Verify__Email
);
