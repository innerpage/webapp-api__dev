import { Request, Response } from "express";

export const controller_Account_Logout = (req: Request, res: Response) => {
  res.send("POST on /logout ");
};
