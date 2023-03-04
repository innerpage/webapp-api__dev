import { Router } from "express";
import { Middleware_Block_Account_NonExistence } from "../../../../global/middlewares";
import {
  middleware_Validate_Account_ResetPasswordInputs,
  middleware_Format_Account_ResetPasswordInputs,
} from "../../middlewares";
import { controller_Account_ResetPassword } from "../../controllers";

export const route_Account_ResetPassword = Router();

route_Account_ResetPassword.post(
  "/reset-password",
  middleware_Validate_Account_ResetPasswordInputs,
  middleware_Format_Account_ResetPasswordInputs,
  Middleware_Block_Account_NonExistence,
  controller_Account_ResetPassword
);
