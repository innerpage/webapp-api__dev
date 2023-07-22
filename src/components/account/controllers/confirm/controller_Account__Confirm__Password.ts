import { Request, Response } from "express";
import {
  dal_Account__Read__By__Email,
  dal_Account__Write__New_Password,
} from "../../dals";
import {
  helper_Account__Verify__Password_Hash,
  helper_Account__Hash__Password,
  helper_Account__Mail__Confirm__Reset__Password,
} from "../../helpers";
import { config_App } from "../../../../config";

export const controller_Account__Confirm__Password = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account__Read__By__Email(res.locals.email);

  if (account.password_reset_code != res.locals.code_ResetPassword) {
    console.log(
      `${res.locals.code_ResetPassword} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "❌ Invalid password reset code",
    });
  }

  let password_Hashed_New: string = await helper_Account__Hash__Password(
    res.locals.password_New
  );

  let returnObj_NewPassword: any = await dal_Account__Write__New_Password(
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
    await helper_Account__Mail__Confirm__Reset__Password(
      account.first_name,
      res.locals.email,
      config_App.url__App__Website,
      config_App.name__App,
      config_App.name__Business,
      config_App.address__Business,
      config_App.email__App
    );
  console.log(returnObj_MailPasswordResetConfirmation.message);
  console.log(returnObj_MailPasswordResetConfirmation.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password has been reset",
  });
};
