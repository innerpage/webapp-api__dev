import { Request, Response } from "express";

export const controller_Gateway_Add = (req: Request, res: Response) => {
  res.send("POST on /gateway ");
};
