import { Router } from "express";
import { Middleware_Block_Account_NonExistence } from "../../../../global/middlewares";
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
  Middleware_Block_Account_NonExistence,
  controller_Account_ConfirmPassword
);
