import { Router } from "express";
import { Middleware__Block__AccountNonExistence__By__Email } from "../../../../global/middlewares";
import {
  middleware_Account__Validate__Inputs_For__Mail_PasswordReset,
  middleware_Account__Format__Inputs_For__Mail_PasswordReset,
} from "../../middlewares";
import { controller_Account__Mail__Code__Password_Reset } from "../../controllers";

export const route_Account__Mail__Code_PasswordReset = Router();

route_Account__Mail__Code_PasswordReset.post(
  "/send-password-reset-code",
  middleware_Account__Validate__Inputs_For__Mail_PasswordReset,
  middleware_Account__Format__Inputs_For__Mail_PasswordReset,
  Middleware__Block__AccountNonExistence__By__Email,
  controller_Account__Mail__Code__Password_Reset
);
