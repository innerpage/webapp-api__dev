import { Request, Response, NextFunction } from "express";

export const middleware_Gateway_Format_Inputs_For_Stripe_CheckSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id_Session } = req.body;

  res.locals.id_Session = id_Session.trim();

  next();
};
