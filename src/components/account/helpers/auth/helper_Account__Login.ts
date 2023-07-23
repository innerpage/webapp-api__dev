import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Account_Login = (req: Request, accountId: string) => {
  req.session!.accountId = accountId;
};
