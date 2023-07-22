import { Request, Response, NextFunction } from "express";

export const Middleware_Extract_Id_Account_From_Request = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id_Account: string = req.session!.id_Account!;

  if (!id_Account) {
    console.log("❌ Un-authorised access");
    return res.status(400).json({
      success: false,
      message: "❌ Un-authorised access",
    });
  }

  res.locals.id_Account = id_Account;
  next();
};