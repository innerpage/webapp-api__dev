import { Request, Response, NextFunction } from "express";

export const ExtractIPAddressFromOrigin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let ip: any = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (!ip) {
    console.log("❌ Origin has no IP");
    return res.status(400).json({
      success: false,
      message: "❌ Un-authorised access",
    });
  }

  res.locals.clientIPAddress = ip;
  console.log(`✅ Origin IP: ${res.locals.clientIPAddress}`);
  next();
};
