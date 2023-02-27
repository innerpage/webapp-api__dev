import { Request, Response } from "express";
import { dal_Account_Create } from "../../dals";
import {
  helper_Account_Login,
  helper_Account_HashPassword,
  helper_Account_MailVerificationLink,
} from "../../helpers";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { firstName, lastName, email, password } = res.locals;

  let hashed_Password: string = await helper_Account_HashPassword(password);
  let returnObj_CreateAccount: any = await dal_Account_Create(
    firstName,
    lastName,
    email,
    hashed_Password
  );

  if (!returnObj_CreateAccount.success) {
    console.log(returnObj_CreateAccount.message);
    console.log(returnObj_CreateAccount.payload);
  }

  let id_NewAccount: string = returnObj_CreateAccount.payload;
  helper_Account_Login(req, res, id_NewAccount);

  res.status(200).json({
    success: true,
    message: "Signed up",
  });
};
