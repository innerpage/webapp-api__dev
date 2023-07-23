import { Request, Response } from "express";
import {
  dal_Account_Read_By_Email,
  dal_Account_Write_New_Password,
} from "../../dals";
import {
  helper_Account_Verify_Password_Hash,
  helper_Account_Hash_Password,
  helper_Account_Mail_Confirm_Reset_Password,
} from "../../helpers";
import { App_Config } from "../../../../config";

export const controller_Account_Confirm_Password = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_Email(res.locals.email);

  if (account.password_reset_code != res.locals.code_ResetPassword) {
    console.log(
      `${res.locals.code_ResetPassword} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "❌ Invalid password reset code",
    });
  }

  let password_Hashed_New: string = await helper_Account_Hash_Password(
    res.locals.password_New
  );

  let returnObj_NewPassword: any = await dal_Account_Write_New_Password(
    res.locals.email,
    password_Hashed_New
  );
  console.log(returnObj_NewPassword.message);
  console.log(returnObj_NewPassword.payload);

  if (!returnObj_NewPassword.success) {
    console.log(`Password reset failed`);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to reset password",
    });
  }

  let returnObj_MailPasswordResetConfirmation: any =
    await helper_Account_Mail_Confirm_Reset_Password(
      account.first_name,
      res.locals.email,
      App_Config.APP_WEBSITE,
      App_Config.APP_NAME,
      App_Config.BUSINESS_NAME,
      App_Config.BUSINESS_ADDRESS,
      App_Config.APP_EMAIL
    );
  console.log(returnObj_MailPasswordResetConfirmation.message);
  console.log(returnObj_MailPasswordResetConfirmation.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password has been reset",
  });
};
