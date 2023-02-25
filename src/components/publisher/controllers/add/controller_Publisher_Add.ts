import { Request, Response } from "express";

export const controller_Publisher_Add = (req: Request, res: Response) => {
  res.status(200).send("POST on /controller ");
};
