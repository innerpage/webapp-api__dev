import { Router } from "express";
import { Middleware__Block__AccountNonExistence_By_Email } from "../../../../global/middlewares";
import {
  middleware_Validate_Account_MailPasswordResetInputs,
  middleware_Format_Account_MailPasswordResetInputs,
} from "../../middlewares";
import { controller_Account__Mail__PasswordResetCode } from "../../controllers";

export const route_Account_MailPasswordResetCode = Router();

route_Account_MailPasswordResetCode.post(
  "/send-password-reset-code",
  middleware_Validate_Account_MailPasswordResetInputs,
  middleware_Format_Account_MailPasswordResetInputs,
  Middleware__Block__AccountNonExistence_By_Email,
  controller_Account__Mail__PasswordResetCode
);
