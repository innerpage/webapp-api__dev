import { Request, Response, NextFunction } from "express";

export const middleware_Account_Format_Inputs_For_Verify_Email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, code_EmailVerification } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.code_EmailVerification = code_EmailVerification;

  next();
};
