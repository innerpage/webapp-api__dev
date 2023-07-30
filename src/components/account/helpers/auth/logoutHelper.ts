import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const logoutHelper = (req: Request, res: Response) => {
  new Promise<void>((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.EXPRESS_SESSION_NAME!);
      res.clearCookie("isLogged");
      resolve();

      let logoutPayloadObject = { isSessionActive: false };

      return res.status(200).json({
        success: true,
        message: "✅ Logged out",
        payload: logoutPayloadObject,
      });
    });
  });
};