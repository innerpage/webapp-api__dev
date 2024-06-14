import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const login = (req: Request, res: Response, accountId: string) => {
  req.session!.accountId = accountId;
  res.cookie("isLogged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
};
