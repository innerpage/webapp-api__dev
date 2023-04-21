import { Request, Response } from "express";

export const controller_Subscriber_Add = (req: Request, res: Response) => {
  return res.status(200).send("POST on /subscriber ");
};
