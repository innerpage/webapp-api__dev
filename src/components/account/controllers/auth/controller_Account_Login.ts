import { Request, Response } from "express";
import { helper_Login } from "../../helpers";

export const controller_Account_Login = (req: Request, res: Response) => {
  helper_Login(req, res, res.locals.id_Account);

  res.status(200).json({
    success: true,
    message: "Logged in",
  });
};
