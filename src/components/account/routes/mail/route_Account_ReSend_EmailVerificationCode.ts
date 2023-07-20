import { Router } from "express";
import {
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
} from "../../../../global/middlewares";
import { controller_Account__Mail__EmailVerificationCode } from "../../controllers";
import {
  middleware_Validate_Account_ReSend_EmailVerificationCode_Inputs,
  middleware_Format_Account_ReSend_EmailVerificationCode,
} from "../../middlewares";

export const route_Account_ReSend_EmailVerificationCode = Router();

route_Account_ReSend_EmailVerificationCode.post(
  "/resend-email-verification-code",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  middleware_Validate_Account_ReSend_EmailVerificationCode_Inputs,
  middleware_Format_Account_ReSend_EmailVerificationCode,
  controller_Account__Mail__EmailVerificationCode
);
