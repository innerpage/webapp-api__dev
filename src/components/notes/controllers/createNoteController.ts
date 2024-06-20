import { Request, Response } from "express";

export const createNoteController = async (req: Request, res: Response) => {
  return res.send("Create note controller");
};
