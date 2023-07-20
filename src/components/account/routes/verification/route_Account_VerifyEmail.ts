import { Router } from "express";
import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Block__AccountNonExistence_By_Email,
} from "../../../../global/middlewares";
import {
  middleware_Validate_Account_EmailVerificationInputs,
  middleware_Format_Account_EmailVerificationInputs,
} from "../../middlewares";
import { controller_Account__Verify__Email } from "../../controllers";

export const route_Account_VerifyEmail = Router();

route_Account_VerifyEmail.post(
  "/verify-email",
  middleware_Validate_Account_EmailVerificationInputs,
  middleware_Format_Account_EmailVerificationInputs,
  Middleware__Block__AccountNonExistence_By_Email,
  Middleware__Block__Account_LoggedOut,
  controller_Account__Verify__Email
);
