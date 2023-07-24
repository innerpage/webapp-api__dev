import { Router } from "express";
import {
  BlockNonExistentAccountByEmail,
  FormatInputsForMail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { controller_Account_Mail_Code_PasswordReset } from "../../controllers";

export const mailPasswordResetCodeRoute = Router();

mailPasswordResetCodeRoute.post(
  "/send-password-reset-code",
  ValidateEmail,
  FormatInputsForMail,
  BlockNonExistentAccountByEmail,
  controller_Account_Mail_Code_PasswordReset
);
