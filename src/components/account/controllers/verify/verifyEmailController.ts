import { Request, Response } from "express";
import {
  writeVerificationCode,
  writeEmailVerificationStatus,
  readAccountByVerificationCode,
} from "../../dals";
import { Var } from "../../../../global/var";

export const verifyEmailController = async (req: Request, res: Response) => {
  let account: any = await readAccountByVerificationCode(res.locals.code);
  if (!account) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not verify your email`,
    });
  }

  let verificationCode: string = account.dataValues.verification_code;
  if (!verificationCode) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid verification link`,
    });
  }

  if (res.locals.type === "email") {
    if (account.dataValues.is_email_verified) {
      return res.status(400).json({
        success: false,
        message: `${Var.app.emoji.warning} ${res.locals.email} is already verified`,
      });
    }
  }

  if (verificationCode != res.locals.code) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid verification link`,
    });
  }

  if (res.locals.type === "email") {
    let writeEmailVerificationStatusReturnData: any =
      await writeEmailVerificationStatus(account.email, true);
    console.log(writeEmailVerificationStatusReturnData.message);
    if (!writeEmailVerificationStatusReturnData.success) {
      return res.status(400).json({
        success: false,
        message: `${Var.app.emoji.failure} Could not verify email`,
      });
    }
    console.log(`${Var.app.emoji.success} Email verified`);
  }

  let writeVerificationCodeReturnData: any = await writeVerificationCode(
    account.email,
    ""
  );
  console.log(writeVerificationCodeReturnData.message);
  if (!writeVerificationCodeReturnData.success) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not verify email`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Email verified`,
    payload: {
      email: account.email,
    },
  });
};
