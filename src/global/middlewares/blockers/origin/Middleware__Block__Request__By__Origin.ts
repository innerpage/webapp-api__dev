import { Request, Response, NextFunction } from "express";
import { config_App, config_Node } from "../../../../config";

export const Middleware__Block__Request__By__Origin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (config_Node.env === "prod") {
    if (res.locals.origin != config_App.url_App) {
      console.log(`❌ ${res.locals.origin} is NOT_AUTHORISED for access`);
      return res.status(200).json({
        success: false,
        message: "❌ You are NOT AUTHORISED to make this request",
      });
    }
  }
  console.log(`✅ ${res.locals.origin} is AUTHORISED for access`);
  next();
};
