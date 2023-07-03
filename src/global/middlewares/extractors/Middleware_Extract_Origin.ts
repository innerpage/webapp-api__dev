import { Request, Response, NextFunction } from "express";
import { config_Node } from "../../../config";

export const Middleware_Extract_Origin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (config_Node.env === "dev") {
    res.locals.origin = "http://localhost:3333";
  } else {
    res.locals.origin = req.header("Origin");
  }

  next();
};
