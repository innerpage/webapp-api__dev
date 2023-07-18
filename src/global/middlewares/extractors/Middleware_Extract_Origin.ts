import { Request, Response, NextFunction } from "express";
import { config_Node } from "../../../config";

export const Middleware_Extract_Origin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.origin = req.header("Origin");
  console.log(`Client origin: ${res.locals.origin}`);
  next();
};
