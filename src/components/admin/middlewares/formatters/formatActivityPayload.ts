import { Request, Response, NextFunction } from "express";

export const formatActivityPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { range, startDate, endDate } = req.body;

  res.locals.range = range.trim();
  res.locals.startDate = startDate.trim();
  res.locals.endDate = endDate.trim();

  next();
};
