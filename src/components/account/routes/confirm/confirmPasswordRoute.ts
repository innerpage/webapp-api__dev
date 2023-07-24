import { Router } from "express";
import { BlockNonExistentAccountByEmail } from "../../../../global/middlewares";
import {
  validateInputsForPasswordConfirmation,
  formatInputsForPasswordConfirmation,
} from "../../middlewares";
import { controller_Account_Confirm_Password } from "../../controllers";

export const confirmPasswordRoute = Router();

confirmPasswordRoute.post(
  "/password",
  validateInputsForPasswordConfirmation,
  formatInputsForPasswordConfirmation,
  BlockNonExistentAccountByEmail,
  controller_Account_Confirm_Password
);
