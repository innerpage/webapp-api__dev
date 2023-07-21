import { Request, Response } from "express";
import {
  dal_Account__Write__Code_PasswordReset,
  dal_Account__Read__By_Email,
} from "../../dals";
import { helper_Account__Mail__Code_PasswordReset } from "../../helpers";
import { Helper__Generate__4DigitCode } from "../../../../global/helpers";
import { config__App } from "../../../../config";

export const controller_Account__Mail__Code_PasswordReset = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account__Read__By_Email(res.locals.email);
  let code_PasswordReset: number = await Helper__Generate__4DigitCode();

  let returnObj_WritePasswordResetCode: any =
    await dal_Account__Write__Code_PasswordReset(
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
    await helper_Account__Mail__Code_PasswordReset(
      account.first_name,
      res.locals.email,
      code_PasswordReset,
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
    message: "✅ Password reset code sent",
  });
};
