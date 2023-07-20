import { Request, Response } from "express";
import {
  dal_Account__Write__Code_EmailVerification,
  dal_Account__Read__By_AccountId,
} from "../../dals";
import { helper_Account__Mail__Code_EmailVerification } from "../../helpers";
import { Helper__Generate__4DigitCode } from "../../../../global/helpers";
import { config__App } from "../../../../config";

export const controller_Account__Mail__Code_EmailVerification = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account__Read__By_AccountId(
    res.locals.id_Account
  );
  let code_EmailVerification: number = await Helper__Generate__4DigitCode();

  let returnObj_Write_EmailVerificationCode: any =
    await dal_Account__Write__Code_EmailVerification(
      res.locals.id_Account,
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
    await helper_Account__Mail__Code_EmailVerification(
      account.first_name,
      account.email,
      code_EmailVerification,
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
    message: "✅ Email verification code sent",
    payload: {},
  });
};