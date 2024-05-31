import { Request, Response, NextFunction } from "express";
import { ConfigVar } from "../../../../global/vars";

export const BlockRequestByOrigin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (ConfigVar.node.env === "prod") {
    if (res.locals.origin != ConfigVar.app.url.prod) {
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
