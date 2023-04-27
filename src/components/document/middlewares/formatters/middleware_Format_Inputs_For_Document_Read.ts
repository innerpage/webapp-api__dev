import { Request, Response, NextFunction } from "express";

export const middleware_Format_Inputs_For_Document_Read = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id_Document: any = req.query.id_Document;

  res.locals.id_Document = id_Document.trim();

  next();
};
