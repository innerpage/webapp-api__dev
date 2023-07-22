import { Router } from "express";
import { Middleware__Block__Account_NonExistence__By__Email } from "../../../../global/middlewares";
import {
  middleware_Account__Validate__Inputs_For__Mail__Reset__Password,
  middleware_Account__Format__Inputs_For__Mail__Reset__Password,
} from "../../middlewares";
import { controller_Account__Mail__Code_PasswordReset } from "../../controllers";

export const route_Account__Mail__Code_PasswordReset = Router();

route_Account__Mail__Code_PasswordReset.post(
  "/send-password-reset-code",
  middleware_Account__Validate__Inputs_For__Mail__Reset__Password,
  middleware_Account__Format__Inputs_For__Mail__Reset__Password,
  Middleware__Block__Account_NonExistence__By__Email,
  controller_Account__Mail__Code_PasswordReset
);
