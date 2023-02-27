import { Request, Response, NextFunction } from "express";

export const middleware_Format_Account_LoginInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password;

  next();
};
