import { Request, Response } from "express";

export const deleteNoteController = async (req: Request, res: Response) => {
  return res.send("Delete note controller");
};
