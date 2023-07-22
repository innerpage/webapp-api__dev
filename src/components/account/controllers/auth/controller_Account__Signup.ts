import { Request, Response } from "express";
import { dal_Account__Write__New_Account } from "../../dals";
import {
  helper_Account__Hash__Password,
  helper_Account__Mail__Code_EmailVerification,
  helper_Account__Login,
} from "../../helpers";
import { Helper__Generate__Code_4Digits } from "../../../../global/helpers";
import { config_App } from "../../../../config";

export const controller_Account__Signup = async (
  req: Request,
  res: Response
) => {
  let { name_First, name_Last, email, password } = res.locals;

  let code_EmailVerification: number = Helper__Generate__Code_4Digits();
  let hashed_Password: string = await helper_Account__Hash__Password(password);

  let returnObj_NewAccount: any = await dal_Account__Write__New_Account(
    name_First,
    name_Last,
    email,
    hashed_Password,
    code_EmailVerification
  );

  console.log(returnObj_NewAccount.message);
  console.log(returnObj_NewAccount.payload);
  helper_Account__Login(req, returnObj_NewAccount.payload.id);

  let returnObj_Mail_Code_EmailVerification: any =
    await helper_Account__Mail__Code_EmailVerification(
      returnObj_NewAccount.payload.name_First,
      returnObj_NewAccount.payload.email,
      code_EmailVerification,
      config_App.App_Website_Url,
      config_App.App_Name,
      config_App.name_Business,
      config_App.address_Business,
      config_App.App_Email
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
