import { Request, Response, NextFunction } from "express";

export const formatInputsForSignupMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { firstName, lastName, email, password } = req.body;

  res.locals.firstName = firstName.trim();
  res.locals.lastName = lastName.trim();
  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password.trim();

  next();
};
