import { Request, Response } from "express";

export const controller_Account_Login = (req: Request, res: Response) => {
  res.send("POST on /login ");
};
