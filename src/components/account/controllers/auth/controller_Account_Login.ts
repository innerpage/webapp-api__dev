import { Request, Response } from "express";
import { helper_Login } from "../../helpers";

export const controller_Account_Login = (req: Request, res: Response) => {
  let userId: string = "27f25442-a8bb-4e7e-8c62-e006980b0d49";

  helper_Login(req, res, userId);

  let responseObj = {
    success: true,
    message: "User is logged in",
  };
  res.json(responseObj);
};
