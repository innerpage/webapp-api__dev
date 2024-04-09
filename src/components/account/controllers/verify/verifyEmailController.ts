import { Request, Response } from "express";
import {
  writeVerificationCode,
  writeEmailVerificationStatus,
  readAccountByVerificationCode,
} from "../../dals";

export const verifyEmailController = async (req: Request, res: Response) => {
  let account: any = await readAccountByVerificationCode(res.locals.code);
  if (!account) {
    if (res.locals.type === "email") {
      return res.status(400).json({
        success: false,
        message: "Verification failed or email already verified",
      });
    } else if (res.locals.type === "password-reset") {
      return res.status(400).json({
        success: false,
        message: "❌ Password rest link expired. Please try again",
      });
    }
  }

  let verificationCode: string = account.dataValues.verification_code;
  if (!verificationCode) {
    return res.status(400).json({
      success: false,
      message: "❌ Verification failed",
    });
  }

  if (res.locals.type === "email") {
    if (account.dataValues.is_email_verified) {
      return res.status(400).json({
        success: false,
        message: `${res.locals.email} is already verified`,
      });
    }
  }

  if (verificationCode != res.locals.code) {
    return res.status(400).json({
      success: false,
      message: "❌ Verification link expired",
    });
  }

  if (res.locals.type === "email") {
    let writeEmailVerificationStatusReturnObject: any =
      await writeEmailVerificationStatus(account.email, true);
    console.log(writeEmailVerificationStatusReturnObject.message);
    console.log(writeEmailVerificationStatusReturnObject.payload);
    if (!writeEmailVerificationStatusReturnObject.success) {
      return res.status(400).json({
        success: false,
        message: "❌ Could not verify email",
      });
    }
    console.log("✅ Email verified");
  }

  let writeVerificationCodeReturnObject: any = await writeVerificationCode(
    account.email,
    ""
  );
  console.log(writeVerificationCodeReturnObject.message);
  console.log(writeVerificationCodeReturnObject.payload);
  if (!writeVerificationCodeReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not verify email",
    });
  }

  return res.status(200).json({
    success: true,
    message: "✅ Email verified",
    payload: {
      email: account.email,
    },
  });
};
