import { Request, Response, NextFunction } from "express";

export const ExtractOriginFromRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.origin = req.header("Origin");
  console.log(`Client origin: ${res.locals.origin}`);
  next();
};
