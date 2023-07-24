import { Request, Response } from "express";
import { writePasswordResetCode, readAccountByEmail } from "../../dals";
import { mailPasswordResetCode } from "../../helpers";
import { GenerateFourDigitCode } from "../../../../global/helpers";
import { AppConfig } from "../../../../config";

export const controller_Account_Mail_Code_PasswordReset = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountByEmail(res.locals.email);
  let code_PasswordReset: number = await GenerateFourDigitCode();

  let returnObj_WritePasswordResetCode: any = await writePasswordResetCode(
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

  let returnObj_MailEmailVerificationCode: any = await mailPasswordResetCode(
    account.first_name,
    res.locals.email,
    code_PasswordReset,
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
    message: "✅ Password reset code sent",
  });
};
