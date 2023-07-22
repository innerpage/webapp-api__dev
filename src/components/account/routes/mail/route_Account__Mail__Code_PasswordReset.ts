import { Router } from "express";
import { Middleware_Block_Account_NonExistence_By_Email } from "../../../../global/middlewares";
import {
  middleware_Account_Validate_Inputs_For_Mail_Reset_Password,
  middleware_Account_Format_Inputs_For_Mail_Reset_Password,
} from "../../middlewares";
import { controller_Account_Mail_Code_PasswordReset } from "../../controllers";

export const route_Account_Mail_Code_PasswordReset = Router();

route_Account_Mail_Code_PasswordReset.post(
  "/send-password-reset-code",
  middleware_Account_Validate_Inputs_For_Mail_Reset_Password,
  middleware_Account_Format_Inputs_For_Mail_Reset_Password,
  Middleware_Block_Account_NonExistence_By_Email,
  controller_Account_Mail_Code_PasswordReset
);
