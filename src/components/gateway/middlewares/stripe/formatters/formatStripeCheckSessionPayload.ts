import { Request, Response, NextFunction } from "express";

export const formatStripeCheckSessionPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { sessionId } = req.body;

  res.locals.sessionId = sessionId.trim();

  next();
};
