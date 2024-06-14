import { Request, Response, NextFunction } from "express";

export const formatAccountUpdatePayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { filter, value } = req.body;

  res.locals.filter = filter;
  res.locals.value = value;

  next();
};
