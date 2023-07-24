import { Router } from "express";
import { BlockNonExistentAccountByEmail } from "../../../../global/middlewares";
import {
  validateInputsForPasswordConfirmation,
  formatInputsForPasswordConfirmation,
} from "../../middlewares";
import { confirmPasswordController } from "../../controllers";

export const confirmPasswordRoute = Router();

confirmPasswordRoute.post(
  "/password",
  validateInputsForPasswordConfirmation,
  formatInputsForPasswordConfirmation,
  BlockNonExistentAccountByEmail,
  confirmPasswordController
);
