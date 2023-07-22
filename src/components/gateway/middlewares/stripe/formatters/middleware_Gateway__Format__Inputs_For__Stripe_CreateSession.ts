import { Request, Response, NextFunction } from "express";

export const middleware_Gateway__Format__Inputs_For__Stripe_CreateSession =
  async (req: Request, res: Response, next: NextFunction) => {
    let { id_Document } = req.body;

    res.locals.id_Document = id_Document.trim();

    next();
  };
