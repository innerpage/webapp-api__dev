import { Request, Response } from "express";
import {
  dal_Account_Read_By_Email,
  dal_Account_Write_Status_EmailVerification,
} from "../../dals";

export const controller_Account_Verify_Email = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_Email(res.locals.email);

  let code_EmailVerification: number = account.email_verification_code;
  if (code_EmailVerification != res.locals.code_EmailVerification) {
    console.log(
      `${res.locals.code_EmailVerification} is not a valid verification code for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "❌ Invalid email verification code",
    });
  }

  let returnObj_UpdateEmailVerification: any =
    await dal_Account_Write_Status_EmailVerification(res.locals.email);
  console.log(returnObj_UpdateEmailVerification.message);
  console.log(returnObj_UpdateEmailVerification.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verified",
  });
};
