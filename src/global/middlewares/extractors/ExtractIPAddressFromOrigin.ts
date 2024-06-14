import { Request, Response, NextFunction } from "express";
import { Var } from "../../var";

export const ExtractIPAddressFromOrigin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let ip: any = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (!ip) {
    console.log(`${Var.app.emoji.failure} Invalid IP`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid IP`,
    });
  }

  res.locals.clientIPAddress = ip;
  console.log(
    `${Var.app.emoji.success} Origin IP: ${res.locals.clientIPAddress}`
  );
  next();
};
