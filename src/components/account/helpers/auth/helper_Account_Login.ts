import { Request, Response } from "express";
import { nodeConfig } from "../../../../config";
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
    sameSite:
      process.env.NODE_ENV === "prod" ? ("none" as const) : ("lax" as const),
    secure: nodeConfig.env === "prod" ? true : false,
  };

  console.log("cookieOptions_isLogged");
  console.log(cookieOptions_isLogged);

  req.session!.id_Account = id_Account;
  res.cookie("isLogged", true, cookieOptions_isLogged);
};
