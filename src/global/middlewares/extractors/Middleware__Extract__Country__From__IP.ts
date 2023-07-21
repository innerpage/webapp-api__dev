import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export const Middleware__Extract__Country__From__IP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let country__Client: any = geoip.lookup(res.locals.ip__Client);

  if (!country__Client) {
    console.log("⚠️ Unable to ascertain country. Defaulting to 'IN'");
    country__Client = "IN";
  }

  res.locals.country__Client = country__Client;
  console.log(`Client location: ${res.locals.country__Client}`);
  next();
};
