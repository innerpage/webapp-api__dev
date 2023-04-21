import { Request, Response, NextFunction } from "express";

export const middleware_Format_Document_UploadInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { title, price_Inr, price_Usd, id_Publication } = req.body;

  res.locals.title = title.trim();
  res.locals.price_Inr = parseFloat(price_Inr);
  res.locals.price_Usd = parseFloat(price_Usd);
  res.locals.id_Publication = id_Publication.trim();

  next();
};
