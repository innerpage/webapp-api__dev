import { Request, Response } from "express";
import { writeVerificationCode, readAccountById } from "../../dals";
import { mailEmailVerificationLinkHelper } from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";

export const mailEmailVerificationLinkController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountById(res.locals.accountId);
  let verificationCode: string = await GenerateVerificationCode();

  let writeEmailVerificationCodeReturnObject: any = await writeVerificationCode(
    res.locals.accountId,
    verificationCode
  );
  console.log(writeEmailVerificationCodeReturnObject.message);
  console.log(writeEmailVerificationCodeReturnObject.payload);

  if (!writeEmailVerificationCodeReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not save email verification code",
    });
  }

  let mailEmailVerificationCodeReturnObject: any =
    await mailEmailVerificationLinkHelper(
      account.name,
      account.email,
      verificationCode
    );
  console.log(mailEmailVerificationCodeReturnObject.message);
  console.log(mailEmailVerificationCodeReturnObject.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verification link sent",
    payload: {},
  });
};
