import { Request, Response } from "express";
import { readAccountByEmail, writeNewPassword } from "../../dals";
import {
  hashPasswordHelper,
  mailAccountChangeConfirmationHelper,
} from "../../helpers";

export const confirmPasswordController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountByEmail(res.locals.email);

  if (account.dataValues.password_reset_code != res.locals.passwordResetCode) {
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

  if (!newPasswordReturnObject.success) {
    console.log(`Password reset failed`);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to reset password",
    });
  }

  let mailAccountChangeConfirmationReturnObject: any =
    await mailAccountChangeConfirmationHelper(
      res.locals.email,
      "password",
      account.dataValues.name.split(" ")[0]
    );
  console.log(mailAccountChangeConfirmationReturnObject.message);

  return res.status(200).json({
    success: true,
    message: "✅ Password has been reset",
  });
};
