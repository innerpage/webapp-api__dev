import { Request, Response, NextFunction } from "express";

export const formatInputsForStripeCreateSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { documentId } = req.body;

  res.locals.documentId = documentId.trim();

  next();
};
