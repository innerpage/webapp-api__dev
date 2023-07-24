import { Router } from "express";
import {
  BlockNonExistentAccountByAccountId,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
} from "../../../../global/middlewares";
import { controller_Account_Mail_Code_EmailVerification } from "../../controllers";
import {
  middleware_Account_Validate_Inputs_For_Mail_Code_EmailVerification,
  middleware_Account_Format_Inputs_For_Mail_Code_EmailVerification,
} from "../../middlewares";

export const mailEmailVerificationCodeRoute = Router();

mailEmailVerificationCodeRoute.post(
  "/resend-email-verification-code",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  middleware_Account_Validate_Inputs_For_Mail_Code_EmailVerification,
  middleware_Account_Format_Inputs_For_Mail_Code_EmailVerification,
  controller_Account_Mail_Code_EmailVerification
);
