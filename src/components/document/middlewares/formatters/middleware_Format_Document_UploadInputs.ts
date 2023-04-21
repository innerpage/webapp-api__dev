import { Request, Response, NextFunction } from "express";

export const middleware_Format_Document_UploadInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { title, url_doc, price_inr, price_usd, id_publication } = req.body;

  res.locals.title = title.trim();
  res.locals.url_doc = url_doc.trim();
  res.locals.price_inr = price_inr;
  res.locals.price_usd = price_usd;
  res.locals.id_publication = id_publication.trim();

  next();
};
