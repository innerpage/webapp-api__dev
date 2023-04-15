import { Request, Response, NextFunction } from "express";
import { nodeConfig } from "../../../config";

export const Middleware_Extract_Origin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (nodeConfig.env === "dev") {
    res.locals.origin = "http://localhost:3333";
  } else {
    res.locals.origin = req.header("Origin");
  }

  next();
};
