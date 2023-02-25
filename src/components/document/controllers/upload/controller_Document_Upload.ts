import { Request, Response } from "express";

export const controller_Document_Upload = (req: Request, res: Response) => {
  res.status(200).send("POST on /upload ");
};
