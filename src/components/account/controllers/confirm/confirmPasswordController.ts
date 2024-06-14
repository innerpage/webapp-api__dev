import { Request, Response } from "express";
import { readAccountByEmail, writeNewPassword } from "../../dals";
import { hashPassword, mailAccountChangeConfirmation } from "../../helpers";
import { Var } from "../../../../global/var";

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
      message: `${Var.app.emoji.failure} Invalid verification code`,
    });
  }

  let newHashedPassword: string = await hashPassword(res.locals.newPassword);

  let newPasswordReturnData: any = await writeNewPassword(
    res.locals.email,
    newHashedPassword
  );
  console.log(newPasswordReturnData.message);

  if (!newPasswordReturnData.success) {
    console.log(`${Var.app.emoji.failure} Password reset failed`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Failed to reset password`,
    });
  }

  let mailAccountChangeConfirmationReturnData: any =
    await mailAccountChangeConfirmation(
      res.locals.email,
      "password",
      account.dataValues.name.split(" ")[0]
    );
  console.log(mailAccountChangeConfirmationReturnData.message);

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Password reset successful`,
  });
};
