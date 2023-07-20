import { Router } from "express";
import { Middleware__Block__AccountNonExistence_By_Email } from "../../../../global/middlewares";
import {
  middleware_Validate_Account_ConfirmPasswordInputs,
  middleware_Format_Account_ConfirmPasswordInputs,
} from "../../middlewares";
import { controller_Account_ConfirmPassword } from "../../controllers";

export const route_Account_ConfirmPassword = Router();

route_Account_ConfirmPassword.post(
  "/password",
  middleware_Validate_Account_ConfirmPasswordInputs,
  middleware_Format_Account_ConfirmPasswordInputs,
  Middleware__Block__AccountNonExistence_By_Email,
  controller_Account_ConfirmPassword
);
