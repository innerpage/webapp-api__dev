import { Router } from "express";
import {
  BlockNonExistentAccountById,
  BlockNonExistentAccountByEmail,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  FormatEmail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { mailEmailVerificationCodeController } from "../../controllers";

export const mailEmailVerificationCodeRoute = Router();

mailEmailVerificationCodeRoute.post(
  "/mail-email-verification-code",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  ValidateEmail,
  FormatEmail,
  BlockNonExistentAccountByEmail,
  mailEmailVerificationCodeController
);
