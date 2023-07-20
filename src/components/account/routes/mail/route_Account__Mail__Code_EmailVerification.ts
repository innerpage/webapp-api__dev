import { Router } from "express";
import {
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
} from "../../../../global/middlewares";
import { controller_Account__Mail__Code_EmailVerification } from "../../controllers";
import {
  middleware_Account__Validate__Inputs_For__Mail_Code_EmailVerification,
  middleware_Account__Format__Inputs_For__Mail_Code_EmailVerification,
} from "../../middlewares";

export const route_Account__Mail__Code_EmailVerification = Router();

route_Account__Mail__Code_EmailVerification.post(
  "/resend-email-verification-code",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  middleware_Account__Validate__Inputs_For__Mail_Code_EmailVerification,
  middleware_Account__Format__Inputs_For__Mail_Code_EmailVerification,
  controller_Account__Mail__Code_EmailVerification
);