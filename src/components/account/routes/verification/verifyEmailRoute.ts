import { Router } from "express";
import {
  BlockLoggedOutAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";
import {
  validateInputsForEmailVerification,
  formatInputsForEmailVerification,
} from "../../middlewares";
import { controller_Account_Verify_Email } from "../../controllers";

export const verifyEmailRoute = Router();

verifyEmailRoute.post(
  "/verify-email",
  validateInputsForEmailVerification,
  formatInputsForEmailVerification,
  BlockNonExistentAccountByEmail,
  BlockLoggedOutAccount,
  controller_Account_Verify_Email
);
