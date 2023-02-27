import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Account_Login = (
  req: Request,
  res: Response,
  id_Account: string
) => {
  let sessionTimeout = +process.env.SESSION_TIMEOUT!;
  let cookieOptions_isLogged = {
    expires: new Date(Date.now() + sessionTimeout),
    httpOnly: false,
  };

  req.session!.id_Account = id_Account;
  res.cookie("isLogged", true, cookieOptions_isLogged);
};
