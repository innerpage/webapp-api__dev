import { Request, Response, NextFunction } from "express";

export const formatter_Signup_Inputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { firstName, lastName, email, password } = req.body;

  res.locals.firstName = firstName;
  res.locals.lastName = lastName;
  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password;

  next();
};
