import { Request, Response, NextFunction } from "express";
import { config__App, config__Node } from "../../../../config";

export const Middleware__Block__Request__By__Origin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (config__Node.env === "prod") {
    if (res.locals.origin != config__App.url__App) {
      return res.status(200).json({
        success: false,
        message: "❌ You are not authorised to make this request",
      });
    }
  }

  console.log(`${res.locals.origin} is authorised for access`);
  next();
};
