import { Request, Response } from "express";

export const controller_Gateway_Add = (req: Request, res: Response) => {
  return res.status(200).send("POST on /gateway ");
};
