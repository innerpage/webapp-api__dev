import { Router } from "express";
import {
  BlockNonExistentAccountByEmail,
  FormatInputsForMail,
  ValidateEmail,
} from "../../../../global/middlewares";
import { mailPasswordResetCodeController } from "../../controllers";

export const mailPasswordResetCodeRoute = Router();

mailPasswordResetCodeRoute.post(
  "/send-password-reset-code",
  ValidateEmail,
  FormatInputsForMail,
  BlockNonExistentAccountByEmail,
  mailPasswordResetCodeController
);
