import { Router } from "express";
import {
  BlockNonExistentAccountByIdMiddleware,
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  FormatEmailMiddleware,
  ValidateEmailMiddleware,
} from "../../../../global/middlewares";
import { mailEmailVerificationCodeController } from "../../controllers";

export const mailEmailVerificationCodeRoute = Router();

mailEmailVerificationCodeRoute.post(
  "/resend-email-verification-code",
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  ValidateEmailMiddleware,
  FormatEmailMiddleware,
  mailEmailVerificationCodeController
);
