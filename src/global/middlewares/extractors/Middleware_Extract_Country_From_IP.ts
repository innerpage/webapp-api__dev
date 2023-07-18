import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export const Middleware_Extract_Country_From_IP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let country_Client: any = geoip.lookup(res.locals.ip_Client);

  if (!country_Client) {
    console.log("Unable to ascertain country");
    country_Client = "";
  }

  res.locals.country_Client = country_Client;
  next();
};
