import { Request, Response } from "express";
import {
  dal_Account_Read_By_Email,
  dal_Account_Write_NewPassword,
} from "../../dals";
import {
  helper_Account_VerifyPasswordHash,
  helper_Account_HashPassword,
  helper_Account_MailPasswordResetConfirmation,
} from "../../helpers";
import { config__App } from "../../../../config";

export const controller_Account_ConfirmPassword = async (
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

  let password_Hashed_New: string = await helper_Account_HashPassword(
    res.locals.password_New
  );

  let returnObj_NewPassword: any = await dal_Account_Write_NewPassword(
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
    await helper_Account_MailPasswordResetConfirmation(
      account.first_name,
      res.locals.email,
      config__App.url_App_Website,
      config__App.name_App,
      config__App.name_Business,
      config__App.address_Business,
      config__App.email_App
    );
  console.log(returnObj_MailPasswordResetConfirmation.message);
  console.log(returnObj_MailPasswordResetConfirmation.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password has been reset",
  });
};
