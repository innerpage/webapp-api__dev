import { Request, Response } from "express";
import { dal_Account_Write_New_Account } from "../../dals";
import {
  helper_Account_Hash_Password,
  helper_Account_Mail_Code_EmailVerification,
  helper_Account_Login,
} from "../../helpers";
import { Helper_Generate_Code_4Digits } from "../../../../global/helpers";
import { App_Config } from "../../../../config";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { name_First, name_Last, email, password } = res.locals;

  let code_EmailVerification: number = Helper_Generate_Code_4Digits();
  let hashed_Password: string = await helper_Account_Hash_Password(password);

  let returnObj_NewAccount: any = await dal_Account_Write_New_Account(
    name_First,
    name_Last,
    email,
    hashed_Password,
    code_EmailVerification
  );

  console.log(returnObj_NewAccount.message);
  console.log(returnObj_NewAccount.payload);
  helper_Account_Login(req, returnObj_NewAccount.payload.id);

  let returnObj_Mail_Code_EmailVerification: any =
    await helper_Account_Mail_Code_EmailVerification(
      returnObj_NewAccount.payload.name_First,
      returnObj_NewAccount.payload.email,
      code_EmailVerification,
      App_Config.APP_WEBSITE,
      App_Config.APP_NAME,
      App_Config.BUSINESS_NAME,
      App_Config.BUSINESS_ADDRESS,
      App_Config.APP_EMAIL
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
