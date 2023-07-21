import { Request, Response, NextFunction } from "express";

export const Middleware__Extract__AccountId_From_Request = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id__Account: string = req.session!.id__Account!;

  if (!id__Account) {
    console.log("Un-authorised access");
    return res.status(400).json({
      success: false,
      message: "❌ Un-authorised access",
    });
  }

  res.locals.id__Account = id__Account;
  next();
};
