import { Request, Response, NextFunction } from "express";

export const formatInputsForStripeCheckSessionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { sessionId } = req.body;

  res.locals.sessionId = sessionId.trim();

  next();
};
