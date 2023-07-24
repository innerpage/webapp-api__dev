import { Router } from "express";
import {
  BlockNonExistentAccountByAccountId,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  FormatInputsForMail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { mailEmailVerificationCodeController } from "../../controllers";

export const mailEmailVerificationCodeRoute = Router();

mailEmailVerificationCodeRoute.post(
  "/resend-email-verification-code",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  ValidateEmail,
  FormatInputsForMail,
  mailEmailVerificationCodeController
);
