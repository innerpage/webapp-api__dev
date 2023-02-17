import { Request, Response } from "express";

export const controller_Account_Signup = (req: Request, res: Response) => {
  res.send("POST on /signup ");
};
