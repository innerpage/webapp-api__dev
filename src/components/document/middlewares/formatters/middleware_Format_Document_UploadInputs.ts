import { Request, Response, NextFunction } from "express";

export const middleware_Format_Document_UploadInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { title, id_Price, id_Publication } = req.body;

  res.locals.title = title.trim();
  res.locals.id_Price = id_Price.trim();
  res.locals.id_Publication = id_Publication.trim();

  next();
};
