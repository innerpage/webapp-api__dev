import { Request, Response, NextFunction } from "express";

export const formatInputsForGoogleOauthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { token } = req.body;
  res.locals.token = token;
  next();
};
