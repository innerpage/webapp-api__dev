import { Request, Response } from "express";
import { helper_Logout } from "../../helpers";

export const controller_Account_Logout = (req: Request, res: Response) => {
  helper_Logout(req, res);
};
