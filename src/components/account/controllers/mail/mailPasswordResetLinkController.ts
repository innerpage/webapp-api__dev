import { Request, Response } from "express";
import { writePasswordResetCode, readAccountByEmail } from "../../dals";
import { mailPasswordResetCodeHelper } from "../../helpers";
import { GenerateFourDigitCode } from "../../../../global/helpers";

export const mailPasswordResetLinkController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountByEmail(res.locals.email);
  let passwordResetCode: number = await GenerateFourDigitCode();

  let writePasswordResetCodeReturnObject: any = await writePasswordResetCode(
    res.locals.email,
    passwordResetCode
  );
  console.log(writePasswordResetCodeReturnObject.message);
  console.log(writePasswordResetCodeReturnObject.payload);

  if (!writePasswordResetCodeReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not save password reset code",
    });
  }

  let mailEmailVerificationCodeReturnObject: any =
    await mailPasswordResetCodeHelper(
      account.name,
      res.locals.email,
      passwordResetCode
    );
  console.log(mailEmailVerificationCodeReturnObject.message);
  console.log(mailEmailVerificationCodeReturnObject.payload);

  return res.status(200).json({
    success: true,
    message: "✅ Password reset code sent",
  });
};
