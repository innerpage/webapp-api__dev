import { Request, Response } from "express";
import {
  dal_Account_Write_Code_EmailVerification,
  dal_Account_Read_By_Id_Account,
} from "../../dals";
import { helper_Account_Mail_Code_EmailVerification } from "../../helpers";
import { GenerateFourDigitCode } from "../../../../global/helpers";
import { AppConfig } from "../../../../config";

export const controller_Account_Mail_Code_EmailVerification = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_Id_Account(res.locals.accountId);
  let code_EmailVerification: number = await GenerateFourDigitCode();

  let returnObj_Write_EmailVerificationCode: any =
    await dal_Account_Write_Code_EmailVerification(
      res.locals.accountId,
      code_EmailVerification
    );
  console.log(returnObj_Write_EmailVerificationCode.message);
  console.log(returnObj_Write_EmailVerificationCode.payload);

  if (!returnObj_Write_EmailVerificationCode.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not save email verification code",
    });
  }

  let returnObj_MailEmailVerificationCode: any =
    await helper_Account_Mail_Code_EmailVerification(
      account.first_name,
      account.email,
      code_EmailVerification,
      AppConfig.appWebsiteUrl,
      AppConfig.appName,
      AppConfig.businessName,
      AppConfig.businessAddress,
      AppConfig.appEmail
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verification code sent",
    payload: {},
  });
};
