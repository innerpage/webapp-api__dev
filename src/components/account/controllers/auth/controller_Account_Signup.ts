import { Request, Response } from "express";
import { dal_Account_Write_NewAccount } from "../../dals";
import {
  helper_Account_Login,
  helper_Account_HashPassword,
  helper_Account_MailEmailVerificationCode,
} from "../../helpers";
import { Helper_Generate_4DigitCode } from "../../../../global/helpers";
import { Var_Publisher } from "../../../../global/vars";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { name_First, name_Last, email, password } = res.locals;

  let code_EmailVerification: number = Helper_Generate_4DigitCode();
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
  helper_Account_Login(req, res, returnObj_AccountCreate.payload.id);

  let returnObj_MailEmailVerificationCode: any =
    await helper_Account_MailEmailVerificationCode(
      returnObj_AccountCreate.payload.name_First,
      returnObj_AccountCreate.payload.email,
      code_EmailVerification,
      Var_Publisher.url_Website,
      Var_Publisher.name_Product,
      Var_Publisher.name_Business,
      Var_Publisher.address_Business,
      Var_Publisher.email_Support
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  return res.status(200).json({
    success: true,
    message: "Signed up",
  });
};
