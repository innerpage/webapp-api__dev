import { Request, Response } from "express";
import { dal_Account_Write_New_Account } from "../../dals";
import { hashPassword, mailEmailVerificationCode, login } from "../../helpers";
import { GenerateFourDigitCode } from "../../../../global/helpers";
import { AppConfig } from "../../../../config";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { name_First, name_Last, email, password } = res.locals;

  let code_EmailVerification: number = GenerateFourDigitCode();
  let hashed_Password: string = await hashPassword(password);

  let returnObj_NewAccount: any = await dal_Account_Write_New_Account(
    name_First,
    name_Last,
    email,
    hashed_Password,
    code_EmailVerification
  );

  console.log(returnObj_NewAccount.message);
  console.log(returnObj_NewAccount.payload);
  login(req, returnObj_NewAccount.payload.id);

  let returnObj_Mail_Code_EmailVerification: any =
    await mailEmailVerificationCode(
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
