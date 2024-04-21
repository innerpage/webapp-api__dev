import { Request, Response, NextFunction } from "express";

export const formatAccountUpdatePayloadMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { type, value } = req.body;

  res.locals.type = type;
  res.locals.value = value;

  next();
};
