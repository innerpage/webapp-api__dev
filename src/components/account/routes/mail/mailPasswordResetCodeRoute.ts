import { Router } from "express";
import {
  BlockNonExistentAccountByEmail,
  FormatEmail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { mailPasswordResetCodeController } from "../../controllers";

export const mailPasswordResetCodeRoute = Router();

mailPasswordResetCodeRoute.post(
  "/mail-password-reset-code",
  ValidateEmail,
  FormatEmail,
  BlockNonExistentAccountByEmail,
  mailPasswordResetCodeController
);
