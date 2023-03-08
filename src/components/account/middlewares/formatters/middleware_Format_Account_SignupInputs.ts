import { Request, Response, NextFunction } from "express";

export const middleware_Format_Account_SignupInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name_First, name_Last, email, password } = req.body;

  res.locals.name_First = name_First;
  res.locals.name_Last = name_Last;
  res.locals.email = email.trim().toLowerCase();
  res.locals.password = password;

  next();
};
