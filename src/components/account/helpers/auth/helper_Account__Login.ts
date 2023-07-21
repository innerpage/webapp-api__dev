import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Account__Login = (req: Request, id_Account: string) => {
  req.session!.id_Account = id_Account;
};
