import { Request, Response, NextFunction } from "express";

export const formatUserNameAvailabilityPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { userName } = req.body;

  res.locals.userName = userName.trim();

  next();
};
