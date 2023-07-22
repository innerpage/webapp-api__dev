import { Request, Response, NextFunction } from "express";

export const middleware_Account__Format__Inputs_For__Verify__Email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, code_EmailVerification } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.code_EmailVerification = code_EmailVerification;

  next();
};
