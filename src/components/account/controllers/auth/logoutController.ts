import { Request, Response } from "express";
import { logout } from "../../helpers";

export const logoutController = (req: Request, res: Response) => {
  logout(req, res);
};
