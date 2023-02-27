import { Request, Response } from "express";
import { dal_Account_Create } from "../../dals";
import {
  helper_Account_Login,
  helper_Account_HashPassword,
} from "../../helpers";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { firstName, lastName, email, password } = res.locals;

  let hashed_Password: string = await helper_Account_HashPassword(password);
  let returnObj: any = await dal_Account_Create(
    firstName,
    lastName,
    email,
    hashed_Password
  );

  let id_NewAccount: string = returnObj.payload;
  helper_Account_Login(req, res, id_NewAccount);

  res.status(200).json({
    success: true,
    message: "Signed up",
  });
};
