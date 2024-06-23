import { Request, Response, NextFunction } from "express";

export const formatUpdateNotePayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { noteId, content } = req.body;

  res.locals.noteId = noteId.trim();
  res.locals.content = content.trim();

  next();
};
