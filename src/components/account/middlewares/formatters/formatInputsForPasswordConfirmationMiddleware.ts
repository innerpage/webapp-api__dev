import { Request, Response, NextFunction } from "express";

export const formatInputsForPasswordConfirmationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, newPassword, passwordResetCode } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.newPassword = newPassword.trim();
  res.locals.passwordResetCode = passwordResetCode;

  next();
};
