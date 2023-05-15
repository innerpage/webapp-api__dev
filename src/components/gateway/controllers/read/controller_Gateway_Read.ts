import { Request, Response } from "express";

export const controller_Gateway_Read = (req: Request, res: Response) => {
  return res.status(200).send("GET on /gateway");
};
