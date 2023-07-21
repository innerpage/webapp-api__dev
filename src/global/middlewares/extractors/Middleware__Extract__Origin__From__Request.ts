import { Request, Response, NextFunction } from "express";

export const Middleware__Extract__Origin__From__Request = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.origin = req.header("Origin");
  console.log(`Client origin: ${res.locals.origin}`);
  next();
};
