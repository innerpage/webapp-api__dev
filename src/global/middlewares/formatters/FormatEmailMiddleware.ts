import { Request, Response, NextFunction } from "express";

export const FormatEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email } = req.body;

  res.locals.email = email.trim().toLowerCase();

  next();
};
