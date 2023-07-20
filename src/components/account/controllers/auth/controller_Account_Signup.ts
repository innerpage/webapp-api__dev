import { Request, Response } from "express";
import { dal_Account_Write_NewAccount } from "../../dals";
import {
  helper_Account_HashPassword,
  helper_Account_MailEmailVerificationCode,
  helper_Account_Login,
} from "../../helpers";
import { Helper__Generate__4DigitCode } from "../../../../global/helpers";
import { config__App } from "../../../../config";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { name_First, name_Last, email, password } = res.locals;

  let code_EmailVerification: number = Helper__Generate__4DigitCode();
  let hashed_Password: string = await helper_Account_HashPassword(password);

  let returnObj_AccountCreate: any = await dal_Account_Write_NewAccount(
    name_First,
    name_Last,
    email,
    hashed_Password,
    code_EmailVerification
  );

  console.log(returnObj_AccountCreate.message);
  console.log(returnObj_AccountCreate.payload);
  helper_Account_Login(req, returnObj_AccountCreate.payload.id);

  let returnObj_MailEmailVerificationCode: any =
    await helper_Account_MailEmailVerificationCode(
      returnObj_AccountCreate.payload.name_First,
      returnObj_AccountCreate.payload.email,
      code_EmailVerification,
      config__App.url_App_Website,
      config__App.name_App,
      config__App.name_Business,
      config__App.address_Business,
      config__App.email_App
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  let payload_AccountSignup = {
    name_First: returnObj_AccountCreate.payload.name_First,
    name_Last: returnObj_AccountCreate.payload.name_Last,
    email: returnObj_AccountCreate.payload.email,
    isPublisher: returnObj_AccountCreate.payload.isPublisher,
    isVerified_Email: returnObj_AccountCreate.payload.isVerified_Email,
    isActive_Session: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Signed up",
    payload: payload_AccountSignup,
  });
};
