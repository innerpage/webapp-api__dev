import { Request, Response, NextFunction } from "express";
import { AppConfig, NodeConfig } from "../../../../config";

export const BlockRequestByOriginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (NodeConfig.env === "prod") {
    if (res.locals.origin != AppConfig.appUrl) {
      console.log(`❌ ${res.locals.origin} is not authorized for access`);
      return res.status(200).json({
        success: false,
        message: "❌ You are not authorized to make this request",
      });
    }
  }
  console.log(`✅ ${res.locals.origin} is authorized for access`);
  next();
};
