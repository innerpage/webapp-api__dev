import { Request, Response, NextFunction } from "express";

export const middleware_Format_Gateway_CreateInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name, fee_percentage, public_key, secrey_key, webhook_secret } =
    req.body;

  res.locals.name = name.trim();
  res.locals.fee_percentage = fee_percentage;
  res.locals.public_key = public_key.trim();
  res.locals.secrey_key = secrey_key.trim();
  res.locals.webhook_secret = webhook_secret.trim();

  next();
};
