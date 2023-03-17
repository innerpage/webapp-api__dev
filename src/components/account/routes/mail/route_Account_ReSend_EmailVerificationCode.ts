import { Router } from "express";
import {
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
} from "../../../../global/middlewares";
import { controller_Account_ReSend_EmailVerificationCode } from "../../controllers";
import {
  middleware_Validate_Account_ReSend_EmailVerificationCode_Inputs,
  middleware_Format_Account_ReSend_EmailVerificationCode,
} from "../../middlewares";

export const route_Account_ReSend_EmailVerificationCode = Router();

route_Account_ReSend_EmailVerificationCode.post(
  "/resend-email-verification-code",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  middleware_Validate_Account_ReSend_EmailVerificationCode_Inputs,
  middleware_Format_Account_ReSend_EmailVerificationCode,
  controller_Account_ReSend_EmailVerificationCode
);
