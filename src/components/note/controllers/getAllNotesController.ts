import { Request, Response } from "express";

export const getAllNotesController = async (req: Request, res: Response) => {
  return res.send("Get all notes controller");
};
