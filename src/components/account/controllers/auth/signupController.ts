import { Request, Response } from "express";
import { writeNewAccount } from "../../dals";
import {
  hashPasswordHelper,
  mailVerificationLinkHelper,
  loginHelper,
} from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";

export const signupController = async (req: Request, res: Response) => {
  let { name, email, password } = res.locals;

  let verificationCode: string = await GenerateVerificationCode();
  let hashedPassword: string = await hashPasswordHelper(password);

  let newAccountReturnObject: any = await writeNewAccount(
    name,
    email,
    hashedPassword,
    verificationCode
  );

  if (!newAccountReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: newAccountReturnObject.message,
    });
  }

  console.log(newAccountReturnObject.message);
  console.log(newAccountReturnObject.payload);
  loginHelper(req, res, newAccountReturnObject.payload.id);

  let verificationLink: string = `${res.locals.origin}/verification/email/${verificationCode}`;
  let mailVerificationLinkReturnObject: any = await mailVerificationLinkHelper(
    newAccountReturnObject.payload.name.split(" ")[0],
    newAccountReturnObject.payload.email,
    verificationLink,
    "emailVerificationLink"
  );

  if (!mailVerificationLinkReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: mailVerificationLinkReturnObject.message,
    });
  }

  console.log(mailVerificationLinkReturnObject.message);
  console.log(mailVerificationLinkReturnObject.payload);

  let signupResponseObject = {
    name: newAccountReturnObject.payload.name,
    email: newAccountReturnObject.payload.email,
    isEmailVerified: newAccountReturnObject.payload.isEmailVerified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ User signed up",
    payload: signupResponseObject,
  });
};
