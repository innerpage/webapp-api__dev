import { Request, Response, NextFunction } from "express";

export const middleware_Format_Document_UploadInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { title, sub_title, description, price_inr, price_usd } = req.body;

  res.locals.title = title.trim();
  res.locals.sub_title = sub_title.trim();
  res.locals.description = description.trim();
  res.locals.price_inr = price_inr;
  res.locals.price_usd = price_usd;

  next();
};
