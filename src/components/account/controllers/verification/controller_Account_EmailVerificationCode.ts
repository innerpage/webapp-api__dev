import { Request, Response } from "express";
import {
  dal_Account_GetByEmail,
  dal_Account_EmailVerificationStatus,
} from "../../dals";

export const controller_Account_EmailVerificationCode = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_GetByEmail(res.locals.email);
  if (!account) {
    console.log(`${res.locals.email} is not registered`);
    return res.status(200).json({
      success: false,
      message: "You are not registered",
    });
  }

  let code_EmailVerification: number = account.email_verification_code;
  if (code_EmailVerification != res.locals.code_EmailVerification) {
    console.log(
      `${res.locals.code_EmailVerification} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(200).json({
      success: false,
      message: "Invalid email verification code",
    });
  }

  let returnObj_UpdateEmailVerification: any =
    await dal_Account_EmailVerificationStatus(res.locals.email);
  console.log(returnObj_UpdateEmailVerification.message);
  console.log(returnObj_UpdateEmailVerification.payload);

  res.status(200).json({
    success: true,
    message: "Email verified",
  });
};
