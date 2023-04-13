import { Request, Response, NextFunction } from "express";

export const middleware_Format_Document_UploadInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { title, sub_title, description, price_domestic, price_international } =
    req.body;

  res.locals.title = title.trim();
  res.locals.sub_title = sub_title.trim();
  res.locals.description = description.trim();
  res.locals.price_domestic = price_domestic;
  res.locals.price_international = price_international;

  next();
};
