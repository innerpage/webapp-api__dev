import { Router } from "express";
import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Block__AccountNonExistence_By_Email,
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
  Middleware__Block__AccountNonExistence_By_Email,
  Middleware__Block__Account_LoggedOut,
  controller_Account__Verify__Email
);
