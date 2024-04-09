import { Router } from "express";
import { BlockNonExistentAccountByEmail } from "../../../../global/middlewares";
import {
  validateInputsForPasswordConfirmationMiddleware,
  formatInputsForPasswordConfirmationMiddleware,
} from "../../middlewares";
import { confirmPasswordController } from "../../controllers";

export const confirmPasswordRoute = Router();

confirmPasswordRoute.put(
  "/password",
  validateInputsForPasswordConfirmationMiddleware,
  formatInputsForPasswordConfirmationMiddleware,
  BlockNonExistentAccountByEmail,
  confirmPasswordController
);
