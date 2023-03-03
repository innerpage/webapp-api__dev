import { Router } from "express";
import { Middleware_Block_Account_NonExistence } from "../../../../global/middlewares";
import {
  middleware_Validate_Account_MailPasswordResetInputs,
  middleware_Format_Account_MailPasswordResetInputs,
} from "../../middlewares";
import { controller_Account_MailPasswordResetCode } from "../../controllers";

export const route_Account_MailPasswordResetCode = Router();

route_Account_MailPasswordResetCode.post(
  "/mail-password-reset-code",
  middleware_Validate_Account_MailPasswordResetInputs,
  middleware_Format_Account_MailPasswordResetInputs,
  Middleware_Block_Account_NonExistence,
  controller_Account_MailPasswordResetCode
);
