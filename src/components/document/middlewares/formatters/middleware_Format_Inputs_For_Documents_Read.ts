import { Request, Response, NextFunction } from "express";

export const middleware_Format_Inputs_For_Documents_Read = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id_Publication } = req.body;

  res.locals.id_Publication = id_Publication.trim();

  next();
};
