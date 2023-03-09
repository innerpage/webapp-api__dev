import { Request, Response } from "express";
import { helper_Account_Logout } from "../../helpers";

export const controller_Account_Logout = (req: Request, res: Response) => {
  helper_Account_Logout(req, res);

  return res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
