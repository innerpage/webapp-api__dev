import { Request, Response } from "express";
import {
  dal_Account_Write_Code_PasswordReset,
  dal_Account_Read_By_Email,
} from "../../dals";
import { helper_Account_Mail_Code_PasswordReset } from "../../helpers";
import { Helper_Generate_Code_4Digits } from "../../../../global/helpers";
import { App_Config } from "../../../../config";

export const controller_Account_Mail_Code_PasswordReset = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_Email(res.locals.email);
  let code_PasswordReset: number = await Helper_Generate_Code_4Digits();

  let returnObj_WritePasswordResetCode: any =
    await dal_Account_Write_Code_PasswordReset(
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
    await helper_Account_Mail_Code_PasswordReset(
      account.first_name,
      res.locals.email,
      code_PasswordReset,
      App_Config.App_Website_Url,
      App_Config.App_Name,
      App_Config.App_Business_Name,
      App_Config.App_Business_Address,
      App_Config.App_Email
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password reset code sent",
  });
};
