import { Router } from "express";
import { BlockNonExistentAccountByEmail } from "../../../../global/middlewares";
import {
  validatePasswordConfirmationPayload,
  formatPasswordConfirmationPayload,
} from "../../middlewares";
import { confirmPasswordController } from "../../controllers";

export const confirmPasswordRoute = Router();

confirmPasswordRoute.put(
  "/password",
  validatePasswordConfirmationPayload,
  formatPasswordConfirmationPayload,
  BlockNonExistentAccountByEmail,
  confirmPasswordController
);
