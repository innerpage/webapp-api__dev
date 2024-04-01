import { Router } from "express";
import {
  BlockNonExistentAccountById,
  BlockNonExistentAccountByEmail,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  FormatEmail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { mailEmailVerificationLinkController } from "../../controllers";

export const mailEmailVerificationLinkRoute = Router();

mailEmailVerificationLinkRoute.post(
  "/mail-email-verification-link",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  ValidateEmail,
  FormatEmail,
  BlockNonExistentAccountByEmail,
  mailEmailVerificationLinkController
);
