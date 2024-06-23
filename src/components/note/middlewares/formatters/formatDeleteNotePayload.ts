import { Request, Response, NextFunction } from "express";

export const formatDeleteNotePayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { noteId } = req.body;

  res.locals.noteId = noteId.trim();

  next();
};
