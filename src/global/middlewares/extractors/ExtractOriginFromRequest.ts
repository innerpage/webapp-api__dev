import { Request, Response, NextFunction } from "express";
import { Var } from "../../var";

export const ExtractOriginFromRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.origin = req.header("Origin");
  console.log(`${Var.app.emoji.success} Request origin: ${res.locals.origin}`);
  next();
};
