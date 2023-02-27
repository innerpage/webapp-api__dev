import { Request, Response } from "express";
import { dal_Create_Account } from "../../dals";
import { helper_Login, helper_PasswordHasher } from "../../helpers";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { firstName, lastName, email, password } = res.locals;

  // Check if account exists

  let hashed_Password: string = await helper_PasswordHasher(password);
  let returnObj: any = await dal_Create_Account(
    firstName,
    lastName,
    email,
    hashed_Password
  );

  let id_NewAccount: string = returnObj.payload;
  helper_Login(req, res, id_NewAccount);

  res.status(200).json({
    success: true,
    message: "Signed up",
  });
};
