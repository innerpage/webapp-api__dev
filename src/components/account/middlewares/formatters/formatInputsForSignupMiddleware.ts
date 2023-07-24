import { Request, Response, NextFunction } from "express";

export const formatInputsForSignupMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name_First, name_Last, email, password } = req.body;

  res.locals.name_First = name_First.trim();
  res.locals.name_Last = name_Last.trim();
  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password.trim();

  next();
};
