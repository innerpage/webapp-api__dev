import { Request, Response } from "express";
import { readAccountByEmail, writeNewPassword } from "../../dals";
import {
  hashPasswordHelper,
  mailPasswordResetConfirmationHelper,
} from "../../helpers";

export const confirmPasswordController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountByEmail(res.locals.email);

  if (account.password_reset_code != res.locals.passwordResetCode) {
    console.log(
      `${res.locals.passwordResetCode} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "❌ Failed to reset password",
    });
  }

  let newHashedPassword: string = await hashPasswordHelper(
    res.locals.newPassword
  );

  let newPasswordReturnObject: any = await writeNewPassword(
    res.locals.email,
    newHashedPassword
  );
  console.log(newPasswordReturnObject.message);
  console.log(newPasswordReturnObject.payload);

  if (!newPasswordReturnObject.success) {
    console.log(`Password reset failed`);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to reset password",
    });
  }

  let mailPasswordResetConfirmationReturnObject: any =
    await mailPasswordResetConfirmationHelper(account.name, res.locals.email);
  console.log(mailPasswordResetConfirmationReturnObject.message);
  console.log(mailPasswordResetConfirmationReturnObject.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password has been reset",
  });
};
