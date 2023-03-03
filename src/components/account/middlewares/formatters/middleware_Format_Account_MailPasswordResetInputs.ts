import { Request, Response, NextFunction } from "express";

export const middleware_Format_Account_MailPasswordResetInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email } = req.body;

  res.locals.email = email.trim().toLowerCase();

  next();
};