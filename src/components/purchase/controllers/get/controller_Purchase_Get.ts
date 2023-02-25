import { Request, Response } from "express";

export const controller_Purchase_Get = (req: Request, res: Response) => {
  res.status(200).send("POST on /purchase ");
};
