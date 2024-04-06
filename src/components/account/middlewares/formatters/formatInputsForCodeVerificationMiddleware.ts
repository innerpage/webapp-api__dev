import { Request, Response, NextFunction } from "express";

export const formatInputsForCodeVerificationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, type, code } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.type = type;
  res.locals.code = code.trim();

  next();
};
