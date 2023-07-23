import { Router } from "express";
import { BlockNonExistentAccountByEmail } from "../../../../global/middlewares";
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
  BlockNonExistentAccountByEmail,
  controller_Account_Mail_Code_PasswordReset
);
