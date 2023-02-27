import { Request, Response, NextFunction } from "express";
import { dal_GetAccount_ByEmail } from "../../../components/account/dals";

export const Middleware_Block_AccountNonExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_GetAccount_ByEmail("tuhin.bhuyan0@gmail.com");

  if (!account) {
    return res.status(200).json({
      success: false,
      message: "Account is not registered",
    });
  }

  next();
};
