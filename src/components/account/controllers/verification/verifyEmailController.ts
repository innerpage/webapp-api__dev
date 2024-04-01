import { Request, Response } from "express";
import { readAccountByEmail, writeEmailVerificationStatus } from "../../dals";

export const verifyEmailController = async (req: Request, res: Response) => {
  let account: any = await readAccountByEmail(res.locals.email);

  let emailVerificationCode: number = account.verification_code;
  if (emailVerificationCode != res.locals.emailVerificationCode) {
    console.log(
      `${res.locals.emailVerificationCode} is not a valid verification link for ${res.locals.email}`
    );
    return res.status(400).json({
      success: false,
      message: "❌ Invalid email verification link",
    });
  }

  let updateEmailVerificationStatusReturnObject: any =
    await writeEmailVerificationStatus(res.locals.email);
  console.log(updateEmailVerificationStatusReturnObject.message);
  console.log(updateEmailVerificationStatusReturnObject.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verified",
  });
};
