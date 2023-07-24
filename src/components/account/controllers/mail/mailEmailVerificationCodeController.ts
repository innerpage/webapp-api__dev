import { Request, Response } from "express";
import { writeEmailVerificationCode, readAccountById } from "../../dals";
import { mailEmailVerificationCodeHelper } from "../../helpers";
import { GenerateFourDigitCodeHelper } from "../../../../global/helpers";
import { AppConfig } from "../../../../config";

export const mailEmailVerificationCodeController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountById(res.locals.accountId);
  let emailVerificationCode: number = await GenerateFourDigitCodeHelper();

  let writeEmailVerificationCodeReturnObject: any =
    await writeEmailVerificationCode(
      res.locals.accountId,
      emailVerificationCode
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
    await mailEmailVerificationCodeHelper(
      account.first_name,
      account.email,
      emailVerificationCode
    );
  console.log(mailEmailVerificationCodeReturnObject.message);
  console.log(mailEmailVerificationCodeReturnObject.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Email verification code sent",
    payload: {},
  });
};
