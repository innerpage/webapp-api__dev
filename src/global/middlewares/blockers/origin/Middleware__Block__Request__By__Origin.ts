import { Request, Response, NextFunction } from "express";
import { App_Config, NodeConfig } from "../../../../config";

export const Middleware_Block_Request_By_Origin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (NodeConfig.env === "prod") {
    if (res.locals.origin != App_Config.APP_URL) {
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
