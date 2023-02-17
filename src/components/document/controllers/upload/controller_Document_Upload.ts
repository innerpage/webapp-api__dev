import { Request, Response } from "express";

export const controller_Document_Upload = (req: Request, res: Response) => {
  res.send("POST on /upload ");
};
