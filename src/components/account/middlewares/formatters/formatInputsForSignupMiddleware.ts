import { Request, Response, NextFunction } from "express";

export const formatInputsForSignupMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name, email, password } = req.body;

  res.locals.name = name.trim();
  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password.trim();

  next();
};
