import { Request, Response } from "express";

export const getNoteController = async (req: Request, res: Response) => {
  return res.send("Get note controller");
};
