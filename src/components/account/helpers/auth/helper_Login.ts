import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Login = (req: Request, res: Response, userId: string) => {
  let sessionTimeout = +process.env.SESSION_TIMEOUT!;
  let cookieOptions_isLogged = {
    expires: new Date(Date.now() + sessionTimeout),
    httpOnly: false,
  };

  req.session!.userId = userId;
  res.cookie("isLogged", true, cookieOptions_isLogged);
};
