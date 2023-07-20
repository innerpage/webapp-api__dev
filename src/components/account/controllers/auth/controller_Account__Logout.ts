import { Request, Response } from "express";
import { helper_Account__Logout } from "../../helpers";

export const controller_Account__Logout = (req: Request, res: Response) => {
  helper_Account__Logout(req, res);
};
