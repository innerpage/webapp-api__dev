import { Request, Response } from "express";

export const controller_Reader_Create_ReadingSession = async (
  req: Request,
  res: Response
) => {
  return res.send("HIT on /reading-session");
};
