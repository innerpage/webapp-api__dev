import { Request, Response } from "express";
import { logoutHelper } from "../../helpers";

export const logoutController = (req: Request, res: Response) => {
  logoutHelper(req, res);
};
