import { Request, Response } from "express";
import { helper_Account_Logout } from "../../helpers";

export const controller_Account_Logout = (req: Request, res: Response) => {
  helper_Account_Logout(req, res);
};
