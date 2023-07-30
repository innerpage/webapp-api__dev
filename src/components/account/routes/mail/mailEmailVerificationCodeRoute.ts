import { Router } from "express";
import {
  BlockNonExistentAccountByIdMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  FormatEmailMiddleware,
  ValidateEmailMiddleware,
} from "../../../../global/middlewares";
import { mailEmailVerificationCodeController } from "../../controllers";

export const mailEmailVerificationCodeRoute = Router();

mailEmailVerificationCodeRoute.post(
  "/mail-email-verification-code",
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  ValidateEmailMiddleware,
  FormatEmailMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
  mailEmailVerificationCodeController
);
