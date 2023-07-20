import { Request, Response, NextFunction } from "express";

export const middleware_Account__Format__Inputs_For__Login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password;

  next();
};
