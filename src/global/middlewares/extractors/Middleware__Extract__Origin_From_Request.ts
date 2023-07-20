import { Request, Response, NextFunction } from "express";

export const Middleware__Extract__Origin_From_Request = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.origin = req.header("Origin");
  console.log(`Client origin: ${res.locals.origin}`);
  next();
};
