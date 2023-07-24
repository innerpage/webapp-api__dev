import { Request, Response } from "express";
import { logout } from "../../helpers";

export const controller_Account_Logout = (req: Request, res: Response) => {
  logout(req, res);
};
