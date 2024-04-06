import { Request, Response, NextFunction } from "express";

export const formatInputsForEmailVerificationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { type, code } = req.body;

  res.locals.type = type;
  res.locals.code = code.trim();

  next();
};
