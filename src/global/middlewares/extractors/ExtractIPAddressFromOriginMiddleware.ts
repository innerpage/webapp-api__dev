import { Request, Response, NextFunction } from "express";

export const ExtractIPAddressFromOriginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let ip: any = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (!ip) {
    console.log("❌ Request has no IP");
    return res.status(400).json({
      success: false,
      message: "❌ Un-authorised access",
    });
  }

  res.locals.clientIPAddress = ip;
  console.log(`Client IP: ${res.locals.clientIPAddress}`);
  next();
};
