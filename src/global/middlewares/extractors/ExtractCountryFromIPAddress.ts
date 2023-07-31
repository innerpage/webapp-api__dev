import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export const ExtractCountryFromIPAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let clientCountry: any = geoip.lookup(res.locals.clientIPAddress);

  if (!clientCountry) {
    console.log("⚠️ Unable to ascertain country. Defaulting to 'IN'");
    clientCountry = "IN";
  }

  res.locals.clientCountry = clientCountry;
  console.log(`Client location: ${res.locals.clientCountry}`);
  next();
};
