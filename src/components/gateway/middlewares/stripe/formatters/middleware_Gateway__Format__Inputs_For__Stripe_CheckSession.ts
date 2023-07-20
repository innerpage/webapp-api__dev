import { Request, Response, NextFunction } from "express";

export const middleware_Gateway__Format__Inputs_For__Stripe_CheckSession =
  async (req: Request, res: Response, next: NextFunction) => {
    let { id_Session } = req.body;

    res.locals.id_Session = id_Session.trim();

    next();
  };
