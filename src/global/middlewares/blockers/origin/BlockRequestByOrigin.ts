import { Request, Response, NextFunction } from "express";
import { AppConfig, NodeConfig } from "../../../../config";

export const BlockRequestByOrigin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (NodeConfig.env === "prod") {
    if (res.locals.origin != AppConfig.appUrl) {
      console.log(`❌ ${res.locals.origin} is not an authorized origin`);
      return res.status(200).json({
        success: false,
        message: "❌ You are not authorized to make this request",
      });
    }
  }
  console.log(`✅ ${res.locals.origin} is authorized origin`);
  next();
};
