import { Request, Response, NextFunction } from "express";

export const formatInputsForPasswordConfirmationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, newPassword } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.newPassword = newPassword.trim();

  next();
};
