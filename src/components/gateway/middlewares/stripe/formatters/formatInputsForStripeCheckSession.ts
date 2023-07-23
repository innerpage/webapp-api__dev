import { Request, Response, NextFunction } from "express";

export const formatInputsForStripeCheckSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { sessionId } = req.body;

  res.locals.sessionId = sessionId.trim();

  next();
};
