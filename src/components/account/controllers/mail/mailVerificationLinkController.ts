import { Request, Response } from "express";
import { writeVerificationCode, readAccountByEmail } from "../../dals";
import { mailVerificationLinkHelper } from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";

export const mailVerificationLinkController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountByEmail(res.locals.email);
  let verificationCode: string = await GenerateVerificationCode();

  let writeVerificationCodeReturnObject: any = await writeVerificationCode(
    account.email,
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

  let mailVerificationLinkReturnObject: any;
  let verificationLink: string = "";

  if (res.locals.mailType === "emailVerificationLink") {
    verificationLink = `${res.locals.origin}/verify/email/${verificationCode}`;
    mailVerificationLinkReturnObject = await mailVerificationLinkHelper(
      account.name.split(" ")[0],
      account.email,
      verificationLink,
      "emailVerificationLink"
    );
  } else if (res.locals.mailType === "passwordResetLink") {
    verificationLink = `${res.locals.origin}/verify/password-reset/${verificationCode}`;
    mailVerificationLinkReturnObject = await mailVerificationLinkHelper(
      account.name.split(" ")[0],
      account.email,
      verificationLink,
      "passwordResetLink"
    );
  }
  console.log(mailVerificationLinkReturnObject.message);
  console.log(mailVerificationLinkReturnObject.payload);

  if (!mailVerificationLinkReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: mailVerificationLinkReturnObject.message,
      payload: {},
    });
  }

  return res.status(200).json({
    success: true,
    message: mailVerificationLinkReturnObject.message,
    payload: {},
  });
};
