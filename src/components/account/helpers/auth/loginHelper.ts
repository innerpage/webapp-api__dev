import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const loginHelper = (req: Request, accountId: string) => {
  req.session!.accountId = accountId;
};
