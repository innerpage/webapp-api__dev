import { Router } from "express";
import {
  BlockNonExistentAccountByEmail,
  FormatEmail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { mailPasswordResetLinkController } from "../../controllers";

export const mailPasswordResetLinkRoute = Router();

mailPasswordResetLinkRoute.post(
  "/mail-password-reset-link",
  ValidateEmail,
  FormatEmail,
  BlockNonExistentAccountByEmail,
  mailPasswordResetLinkController
);
