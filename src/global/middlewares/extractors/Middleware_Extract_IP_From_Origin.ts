import { Request, Response, NextFunction } from "express";

export const Middleware_Extract_IP_From_Origin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let ip: any = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (!ip) {
    console.log("Req has no IP");
    return res.status(400).json({
      success: false,
      message: "❌ Un-authorised access",
    });
  }
  res.locals.ip_Client = ip;
  console.log(`Client IP: ${res.locals.ip_Client}`);
  next();
};
