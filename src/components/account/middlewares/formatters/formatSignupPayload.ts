import { Request, Response, NextFunction } from "express";

export const formatSignupPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { userName, password } = req.body;

  res.locals.userName = userName.trim();
  res.locals.password = password.trim();

  next();
};
