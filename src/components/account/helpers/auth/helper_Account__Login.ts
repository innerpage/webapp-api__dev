import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Account__Login = (req: Request, id__Account: string) => {
  req.session!.id__Account = id__Account;
};
