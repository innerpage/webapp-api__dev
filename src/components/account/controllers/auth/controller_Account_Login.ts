import { Request, Response } from "express";
import { helper_Account_Login } from "../../helpers";

export const controller_Account_Login = (req: Request, res: Response) => {
  // Check account existence

  helper_Account_Login(req, res, res.locals.id_Account);

  res.status(200).json({
    success: true,
    message: "Logged in",
  });
};
