import { Router } from "express";
import {
  BlockNonExistentAccountByAccountId,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  FormatInputsForMail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { controller_Account_Mail_Code_EmailVerification } from "../../controllers";

export const mailEmailVerificationCodeRoute = Router();

mailEmailVerificationCodeRoute.post(
  "/resend-email-verification-code",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  ValidateEmail,
  FormatInputsForMail,
  controller_Account_Mail_Code_EmailVerification
);
