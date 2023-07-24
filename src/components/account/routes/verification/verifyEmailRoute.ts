import { Router } from "express";
import {
  BlockLoggedOutAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";
import {
  validateInputsForEmailVerification,
  formatInputsForEmailVerification,
} from "../../middlewares";
import { verifyEmailController } from "../../controllers";

export const verifyEmailRoute = Router();

verifyEmailRoute.post(
  "/verify-email",
  validateInputsForEmailVerification,
  formatInputsForEmailVerification,
  BlockNonExistentAccountByEmail,
  BlockLoggedOutAccount,
  verifyEmailController
);
