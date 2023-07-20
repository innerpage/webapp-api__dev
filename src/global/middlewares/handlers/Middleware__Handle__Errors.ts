import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const Middleware__Handle__Errors: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.stack);
  res.status(500).send("An error occured");
};
