import { Request, Response } from "express";
import {
  dal_Account_Write_PasswordResetCode,
  dal_Account_Read_By_Email,
} from "../../dals";
import { helper_Account_MailPasswordResetCode } from "../../helpers";
import { Helper__Generate__4DigitCode } from "../../../../global/helpers";
import { config__App } from "../../../../config";

export const controller_Account_Mail_PasswordResetCode = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_Email(res.locals.email);
  let code_PasswordReset: number = await Helper__Generate__4DigitCode();

  let returnObj_WritePasswordResetCode: any =
    await dal_Account_Write_PasswordResetCode(
      res.locals.email,
      code_PasswordReset
    );
  console.log(returnObj_WritePasswordResetCode.message);
  console.log(returnObj_WritePasswordResetCode.payload);

  if (!returnObj_WritePasswordResetCode.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not save password reset code",
    });
  }

  let returnObj_MailEmailVerificationCode: any =
    await helper_Account_MailPasswordResetCode(
      account.first_name,
      res.locals.email,
      code_PasswordReset,
      config__App.url_App_Website,
      config__App.name_App,
      config__App.name_Business,
      config__App.address_Business,
      config__App.email_App
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password reset code sent",
  });
};
