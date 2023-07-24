import { Request, Response, NextFunction } from "express";

export const ExtractAccountIdFromRequestMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let accountId: string = req.session!.accountId!;

  if (!accountId) {
    console.log("❌ Un-authorised access");
    return res.status(400).json({
      success: false,
      message: "❌ Un-authorised access",
    });
  }

  res.locals.accountId = accountId;
  next();
};
