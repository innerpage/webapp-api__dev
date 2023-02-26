import { Request, Response } from "express";
import { dal_Create_Account } from "../../dals";
import { helper_Login, helper_PasswordHasher } from "../../helpers";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let hashed_Password: string = await helper_PasswordHasher(req.body.password);
  let returnObj: any = await dal_Create_Account(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    hashed_Password
  );

  let id_NewAccount: string = returnObj.payload;
  helper_Login(req, res, id_NewAccount);
  console.log("New account logged in");

  return res.status(200).json({
    success: true,
    message: "Account created",
  });
};
