import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Account_Login = (
  req: Request,
  res: Response,
  id_Account: string
) => {
  req.session!.id_Account = id_Account;
};
