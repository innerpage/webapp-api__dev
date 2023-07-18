import { Request, Response, NextFunction } from "express";
import { config_App, config_Node } from "../../../../config/";

export const Middleware_Block_Request_Not_From_Origin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (config_Node.env === "prod") {
    if (res.locals.origin != config_App.url_App) {
      return res.status(200).json({
        success: false,
        message: "❌ You are not authorised to make this request",
      });
    }
  }

  console.log(`${res.locals.origin} is authorised for access`);
  next();
};
