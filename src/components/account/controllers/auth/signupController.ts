import { Request, Response } from "express";
import { writeNewAccount } from "../../dals";
import {
  hashPasswordHelper,
  mailEmailVerificationCodeHelper,
  loginHelper,
} from "../../helpers";
import { GenerateFourDigitCodeHelper } from "../../../../global/helpers";
import { AppConfig } from "../../../../config";

export const signupController = async (req: Request, res: Response) => {
  let { name_First, name_Last, email, password } = res.locals;

  let code_EmailVerification: number = GenerateFourDigitCodeHelper();
  let hashed_Password: string = await hashPasswordHelper(password);

  let returnObj_NewAccount: any = await writeNewAccount(
    name_First,
    name_Last,
    email,
    hashed_Password,
    code_EmailVerification
  );

  console.log(returnObj_NewAccount.message);
  console.log(returnObj_NewAccount.payload);
  loginHelper(req, returnObj_NewAccount.payload.id);

  let returnObj_Mail_Code_EmailVerification: any =
    await mailEmailVerificationCodeHelper(
      returnObj_NewAccount.payload.name_First,
      returnObj_NewAccount.payload.email,
      code_EmailVerification,
      AppConfig.appWebsiteUrl,
      AppConfig.appName,
      AppConfig.businessName,
      AppConfig.businessAddress,
      AppConfig.appEmail
    );
  console.log(returnObj_Mail_Code_EmailVerification.message);
  console.log(returnObj_Mail_Code_EmailVerification.payload);

  let payload_AccountSignup = {
    name_First: returnObj_NewAccount.payload.name_First,
    name_Last: returnObj_NewAccount.payload.name_Last,
    email: returnObj_NewAccount.payload.email,
    isVerified_Email: returnObj_NewAccount.payload.isVerified_Email,
    isActive_Session: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Signed up",
    payload: payload_AccountSignup,
  });
};
