import { Request, Response, NextFunction } from "express";

export const FormatEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email } = req.body;

  res.locals.email = email.trim().toLowerCase();

  next();
};
