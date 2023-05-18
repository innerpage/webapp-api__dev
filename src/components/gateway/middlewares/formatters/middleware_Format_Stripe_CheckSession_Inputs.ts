import { Request, Response, NextFunction } from "express";

export const middleware_Format_Stripe_CheckSession_Inputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id_Session } = req.body;

  res.locals.id_Session = id_Session.trim();

  next();
};
