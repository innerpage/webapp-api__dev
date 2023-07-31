import { Request, Response } from "express";
import { writeNewAccount } from "../../dals";
import {
  hashPasswordHelper,
  mailEmailVerificationCodeHelper,
  loginHelper,
} from "../../helpers";
import { GenerateFourDigitCode } from "../../../../global/helpers";

export const signupController = async (req: Request, res: Response) => {
  let { firstName, lastName, email, password } = res.locals;

  let emailVerificationCode: number = GenerateFourDigitCode();
  let hashedPassword: string = await hashPasswordHelper(password);

  let newAccountReturnObject: any = await writeNewAccount(
    firstName,
    lastName,
    email,
    hashedPassword,
    emailVerificationCode
  );

  console.log(newAccountReturnObject.message);
  console.log(newAccountReturnObject.payload);
  loginHelper(req, newAccountReturnObject.payload.id);

  let mailEmailVerificationCodeReturnObject: any =
    await mailEmailVerificationCodeHelper(
      newAccountReturnObject.payload.firstName,
      newAccountReturnObject.payload.email,
      emailVerificationCode
    );
  console.log(mailEmailVerificationCodeReturnObject.message);
  console.log(mailEmailVerificationCodeReturnObject.payload);

  let signupResponseObject = {
    firstName: newAccountReturnObject.payload.firstName,
    lastName: newAccountReturnObject.payload.lastName,
    email: newAccountReturnObject.payload.email,
    isEmailVerified: newAccountReturnObject.payload.isEmailVerified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Signed up",
    payload: signupResponseObject,
  });
};
