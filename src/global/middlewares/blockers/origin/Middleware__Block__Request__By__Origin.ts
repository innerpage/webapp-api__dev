import { Request, Response, NextFunction } from "express";
import { App_Config, Node_Config } from "../../../../config";

export const Middleware__Block__Request__By__Origin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Node_Config.env === "prod") {
    if (res.locals.origin != App_Config.App_Url) {
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
