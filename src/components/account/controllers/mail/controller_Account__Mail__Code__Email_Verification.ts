import { Request, Response } from "express";
import {
  dal_Account__Write__Code_EmailVerification,
  dal_Account__Read__By__Id_Account,
} from "../../dals";
import { helper_Account__Mail__Code_EmailVerification } from "../../helpers";
import { Helper__Generate__4_Digit_Code } from "../../../../global/helpers";
import { config__App } from "../../../../config";

export const controller_Account__Mail__Code__Email_Verification = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account__Read__By__Id_Account(
    res.locals.id_Account
  );
  let code_EmailVerification: number = await Helper__Generate__4_Digit_Code();

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
      config__App.url__App__Website,
      config__App.name__App,
      config__App.name__Business,
      config__App.address__Business,
      config__App.email__App
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verification code sent",
    payload: {},
  });
};
