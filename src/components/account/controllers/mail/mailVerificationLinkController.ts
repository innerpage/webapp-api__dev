import { Request, Response } from "express";
import { writeVerificationCode, readAccountByEmail } from "../../dals";
import { mailVerificationLink } from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";
import { Var } from "../../../../global/var";

export const mailVerificationLinkController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountByEmail(res.locals.email);
  if (!account) {
    return res.status(200).json({
      success: false,
      message: `${Var.app.emoji.success} If you have an account with us, you will receive the password reset link in the registered email`,
    });
  }

  let verificationCode: string = await GenerateVerificationCode();
  let writeVerificationCodeReturnData: any = await writeVerificationCode(
    account.email,
    verificationCode
  );
  console.log(writeVerificationCodeReturnData.message);

  if (!writeVerificationCodeReturnData.success) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not save verification code`,
    });
  }

  let mailVerificationLinkReturnData: any;
  let verificationLink: string = "";

  if (res.locals.mailType === "emailVerificationLink") {
    verificationLink = `${res.locals.origin}/verify/email/${verificationCode}`;
    mailVerificationLinkReturnData = await mailVerificationLink(
      account.name.split(" ")[0],
      account.email,
      verificationLink,
      "emailVerificationLink"
    );
  } else if (res.locals.mailType === "passwordResetLink") {
    verificationLink = `${res.locals.origin}/verify/password-reset/${verificationCode}`;
    mailVerificationLinkReturnData = await mailVerificationLink(
      account.name.split(" ")[0],
      account.email,
      verificationLink,
      "passwordResetLink"
    );
  }
  console.log(mailVerificationLinkReturnData.message);

  if (!mailVerificationLinkReturnData.success) {
    return res.status(400).json({
      success: false,
      message: mailVerificationLinkReturnData.message,
      payload: {},
    });
  }

  return res.status(200).json({
    success: true,
    message: mailVerificationLinkReturnData.message,
    payload: mailVerificationLinkReturnData.payload,
  });
};
