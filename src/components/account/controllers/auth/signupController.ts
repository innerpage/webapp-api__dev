import { Request, Response } from "express";
import { writeNewAccount } from "../../dals";
import { hashPassword, mailVerificationLink, login } from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";
import { Var } from "../../../../global/var";

export const signupController = async (req: Request, res: Response) => {
  let { name, email, password } = res.locals;
  let verificationCode: string = await GenerateVerificationCode();
  let hashedPassword: string = await hashPassword(password);

  let newAccount: any = await writeNewAccount(
    name,
    email,
    hashedPassword,
    verificationCode
  );
  if (!newAccount.success) {
    return res.status(400).json({
      success: false,
      message: newAccount.message,
    });
  }
  console.log(newAccount.message);
  login(req, res, newAccount.payload.id);

  let verificationLink: string = `${res.locals.origin}/verify/email/${verificationCode}`;
  let mailVerificationLinkReturnData: any = await mailVerificationLink(
    newAccount.payload.name.split(" ")[0],
    newAccount.payload.email,
    verificationLink,
    "emailVerificationLink"
  );
  if (!mailVerificationLinkReturnData.success) {
    return res.status(400).json({
      success: false,
      message: mailVerificationLinkReturnData.message,
    });
  }
  console.log(mailVerificationLinkReturnData.message);

  let responseData = {
    name: newAccount.payload.name,
    email: newAccount.payload.email,
    isEmailVerified: newAccount.payload.isEmailVerified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} User signed up`,
    payload: responseData,
  });
};
