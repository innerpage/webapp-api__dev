import { Request, Response, NextFunction } from "express";

export const formatInputsForEmailVerificationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, emailVerificationCode } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.emailVerificationCode = emailVerificationCode;

  next();
};
