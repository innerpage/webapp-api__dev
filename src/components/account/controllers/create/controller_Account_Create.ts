import { Request, Response } from "express";

export const controller_Account_Create = (req: Request, res: Response) => {
  res.status(200).send("POST on /account ");
};
