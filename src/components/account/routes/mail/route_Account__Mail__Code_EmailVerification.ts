import { Router } from "express";
import {
  Middleware__Block__Account_Non_Existence__By__Account_Id,
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Account_Id__From__Request,
} from "../../../../global/middlewares";
import { controller_Account__Mail__Code_EmailVerification } from "../../controllers";
import {
  middleware_Account__Validate__Inputs_For__Mail_Code_EmailVerification,
  middleware_Account__Format__Inputs_For__Mail_Code_EmailVerification,
} from "../../middlewares";

export const route_Account__Mail__Code_EmailVerification = Router();

route_Account__Mail__Code_EmailVerification.post(
  "/resend-email-verification-code",
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Account_Id__From__Request,
  Middleware__Block__Account_Non_Existence__By__Account_Id,
  middleware_Account__Validate__Inputs_For__Mail_Code_EmailVerification,
  middleware_Account__Format__Inputs_For__Mail_Code_EmailVerification,
  controller_Account__Mail__Code_EmailVerification
);
