import { Request, Response, NextFunction } from "express";

export const middleware_Format_Inputs_For_ReadingSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id_Document, no_Page, id_Socket } = req.body;

  res.locals.id_Document = id_Document.trim();
  res.locals.no_Page = no_Page;
  res.locals.id_Socket = id_Socket.trim();

  next();
};
