import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";
import { Var } from "../../var";

export const ExtractCountryFromIPAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let originCountry: any = geoip.lookup(res.locals.clientIPAddress);

  if (!originCountry) {
    console.log(
      `${Var.app.emoji.warning} Unable to ascertain origin country. Defaulting to 'IN'`
    );
    originCountry = "IN";
  }

  res.locals.originCountry = originCountry;
  console.log(
    `${Var.app.emoji.success} Origin country: ${res.locals.originCountry}`
  );
  next();
};
