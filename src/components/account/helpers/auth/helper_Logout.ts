import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Logout = (req: Request, res: Response) => {
  new Promise<void>((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.SESSION_NAME!);
      res.clearCookie("isLogged");
      resolve();

      let responseObj_Logout = {
        success: true,
        message: "User is logged out",
      };
      res.status(200).json(responseObj_Logout);
    });
  });
};
