import { Request, Response, NextFunction } from "express";

export const formatMailPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, type } = req.body;

  res.locals.email = email.trim().toLowerCase();
  res.locals.mailType = type;

  next();
};
