import { Request, Response, NextFunction } from "express";

export const middleware_Gateway_Format_Inputs_For_Stripe_CreateSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id_Document } = req.body;

  res.locals.id_Document = id_Document.trim();

  next();
};
