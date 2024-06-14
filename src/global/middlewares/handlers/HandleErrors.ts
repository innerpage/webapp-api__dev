import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { Var } from "../../var";

export const HandleErrors: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${Var.app.emoji.failure} ${err.stack}`);
  res.status(500).send(`${Var.app.emoji.failure} An error occured`);
};
