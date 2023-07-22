import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export const Middleware_Extract_Country_From_IP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let country_Client: any = geoip.lookup(res.locals.ip_Client);

  if (!country_Client) {
    console.log("⚠️ Unable to ascertain country. Defaulting to 'IN'");
    country_Client = "IN";
  }

  res.locals.country_Client = country_Client;
  console.log(`Client location: ${res.locals.country_Client}`);
  next();
};
