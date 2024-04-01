import { Request, Response } from "express";
import { writeVerificationCode, readAccountById } from "../../dals";
import {
  mailEmailVerificationLinkHelper,
  mailPasswordResetLinkHelper,
} from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";

export const mailVerificationLinkController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountById(res.locals.accountId);
  let verificationCode: string = await GenerateVerificationCode();

  let writeVerificationCodeReturnObject: any = await writeVerificationCode(
    res.locals.accountId,
    verificationCode
  );
  console.log(writeVerificationCodeReturnObject.message);
  console.log(writeVerificationCodeReturnObject.payload);

  if (!writeVerificationCodeReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not save verification code",
    });
  }

  let mailVerificationCodeReturnObject: any;
  let verificationLink: string = "";

  if (res.locals.mailType === "emailVerificationLink") {
    verificationLink = `${res.locals.origin}/verification/email/${verificationCode}`;
    mailVerificationCodeReturnObject = await mailEmailVerificationLinkHelper(
      account.name,
      account.email,
      verificationLink
    );
  } else if (res.locals.mailType === "passwordResetLink") {
    verificationLink = `${res.locals.origin}/verification/reset-password/${verificationCode}`;
    mailVerificationCodeReturnObject = await mailPasswordResetLinkHelper(
      account.name,
      account.email,
      verificationLink
    );
  }
  console.log(mailVerificationCodeReturnObject.message);
  console.log(mailVerificationCodeReturnObject.payload);

  if (!mailVerificationCodeReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: `❌ ${mailVerificationCodeReturnObject.message}`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `✅ ${mailVerificationCodeReturnObject.message}`,
    payload: {},
  });
};
