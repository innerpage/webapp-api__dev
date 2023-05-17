import { Request, Response, NextFunction } from "express";

export const middleware_Format_Stripe_CheckoutSession_Inputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id_Document } = req.body;

  res.locals.id_Document = id_Document.trim();

  next();
};
