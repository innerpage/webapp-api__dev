import { Request, Response } from "express";
import {
  dal_Account_Read_ByEmail,
  dal_Account_Write_EmailVerificationStatus,
} from "../../dals";

export const controller_Account_VerifyEmail = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByEmail(res.locals.email);

  let code_EmailVerification: number = account.email_verification_code;
  if (code_EmailVerification != res.locals.code_EmailVerification) {
    console.log(
      `${res.locals.code_EmailVerification} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "Invalid email verification code",
    });
  }

  let returnObj_UpdateEmailVerification: any =
    await dal_Account_Write_EmailVerificationStatus(res.locals.email);
  console.log(returnObj_UpdateEmailVerification.message);
  console.log(returnObj_UpdateEmailVerification.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verified",
  });
};
