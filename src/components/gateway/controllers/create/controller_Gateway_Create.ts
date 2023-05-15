import { Request, Response } from "express";

export const controller_Gateway_Create = (req: Request, res: Response) => {
  return res.status(200).send("POST on /gateway");
};
