import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export const ExtractCountryFromIPAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let originCountry: any = geoip.lookup(res.locals.clientIPAddress);

  if (!originCountry) {
    console.log("⚠️ Unable to ascertain origin country. Defaulting to 'IN'");
    originCountry = "IN";
  }

  res.locals.originCountry = originCountry;
  console.log(`✅ Origin country: ${res.locals.originCountry}`);
  next();
};
