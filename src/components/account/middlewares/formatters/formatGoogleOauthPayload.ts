import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

export const formatGoogleOauthPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { token } = req.body;
  res.locals.token = token;

  console.log(`${Var.app.emoji.success} validateGoogleOauthPayload formatted`);

  next();
};
