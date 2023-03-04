import { Request, Response } from "express";
import {
  dal_Account_Read_ByEmail,
  dal_Account_Write_NewPassword,
} from "../../dals";
import {
  helper_Account_VerifyPasswordHash,
  helper_Account_HashPassword,
  helper_Account_MailPasswordResetConfirmation,
} from "../../helpers";
import { Var_Publisher } from "../../../../global/vars";

export const controller_Account_ResetPassword = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByEmail(res.locals.email);

  if (account.password_reset_code != res.locals.code_ResetPassword) {
    console.log(
      `${res.locals.code_ResetPassword} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "Invalid password reset code",
    });
  }

  let isValid_Password: boolean = await helper_Account_VerifyPasswordHash(
    account?.dataValues.password,
    res.locals.password_Old
  );

  if (!isValid_Password) {
    console.log(`${res.locals.email} password IS_NOT_VALID`);
    return res.status(400).json({
      success: false,
      message: "Invalid old password",
    });
  }

  console.log(`${res.locals.email} password IS_VALID`);

  let password_Hashed_New: string = await helper_Account_HashPassword(
    res.locals.password_New
  );

  let returnObj_NewPassword: any = await dal_Account_Write_NewPassword(
    res.locals.email,
    password_Hashed_New
  );
  console.log(returnObj_NewPassword.message);
  console.log(returnObj_NewPassword.payload);

  if (!returnObj_NewPassword.success) {
    console.log(`Password reset failed`);
    return res.status(400).json({
      success: false,
      message: "Failed to reset password",
    });
  }

  let returnObj_MailPasswordResetConfirmation: any =
    await helper_Account_MailPasswordResetConfirmation(
      account.first_name,
      res.locals.email,
      Var_Publisher.url_Website,
      Var_Publisher.name_Product,
      Var_Publisher.name_Business,
      Var_Publisher.address_Business,
      Var_Publisher.email_Support
    );
  console.log(returnObj_MailPasswordResetConfirmation.message);
  console.log(returnObj_MailPasswordResetConfirmation.payload);

  res.status(200).json({
    success: true,
    message: "Password has been reset",
  });
};
