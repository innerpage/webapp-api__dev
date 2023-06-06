import { Request, Response, NextFunction } from "express";

export const middleware_Format_Inputs_To_Read_Page_By_No = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id_Document: string = req.body.id_Document;
  let no_Page: number = req.body.no_Page;

  res.locals.id_Document = id_Document.trim();
  res.locals.no_Page = no_Page;

  next();
};
