import { Request, Response, NextFunction } from "express";

export const middleware_Format_Publication_CreateInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { title, sub_Title, description, url_Sample, url_Toc, url_Cover } =
    req.body;

  res.locals.title = title.trim();
  res.locals.sub_Title = sub_Title.trim();
  res.locals.description = description.trim();
  res.locals.url_Sample = url_Sample.trim();
  res.locals.url_Toc = url_Toc.trim();
  res.locals.url_Cover = url_Cover.trim();

  next();
};