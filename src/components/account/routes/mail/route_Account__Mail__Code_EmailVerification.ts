import { Router } from "express";
import {
  Middleware__Block__Account_NonExistence__By__Id_Account,
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__Id_Account__From__Request,
} from "../../../../global/middlewares";
import { controller_Account__Mail__Code__Email_Verification } from "../../controllers";
import {
  middleware_Account__Validate__Inputs_For__Mail_Code_EmailVerification,
  middleware_Account__Format__Inputs_For__Mail_Code_EmailVerification,
} from "../../middlewares";

export const route_Account__Mail__Code_EmailVerification = Router();

route_Account__Mail__Code_EmailVerification.post(
  "/resend-email-verification-code",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__Id_Account__From__Request,
  Middleware__Block__Account_NonExistence__By__Id_Account,
  middleware_Account__Validate__Inputs_For__Mail_Code_EmailVerification,
  middleware_Account__Format__Inputs_For__Mail_Code_EmailVerification,
  controller_Account__Mail__Code__Email_Verification
);
