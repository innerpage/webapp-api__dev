import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const helper_Account_Logout = (req: Request, res: Response) => {
  new Promise<void>((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.Express_Session_Name!);
      res.clearCookie("isLogged");
      resolve();

      let payload_AccountLogout = { isActive_Session: false };

      return res.status(200).json({
        success: true,
        message: "✅ Logged out",
        payload: payload_AccountLogout,
      });
    });
  });
};
