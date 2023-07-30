import { Router } from "express";
import {
  BlockNonExistentAccountByEmailMiddleware,
  FormatEmailMiddleware,
  ValidateEmailMiddleware,
} from "../../../../global/middlewares";
import { mailPasswordResetCodeController } from "../../controllers";

export const mailPasswordResetCodeRoute = Router();

mailPasswordResetCodeRoute.post(
  "/mail-password-reset-code",
  ValidateEmailMiddleware,
  FormatEmailMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
  mailPasswordResetCodeController
);
