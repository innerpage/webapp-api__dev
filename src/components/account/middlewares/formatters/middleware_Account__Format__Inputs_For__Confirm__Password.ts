import { Request, Response, NextFunction } from "express";

export const middleware_Account__Format__Inputs_For__Confirm__Password = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password_New, code_ResetPassword } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.password_New = password_New.trim();
  res.locals.code_ResetPassword = code_ResetPassword;

  next();
};
