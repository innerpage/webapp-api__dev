import { Request, Response } from "express";
import dotenv from "dotenv";
import { Var } from "../../../../global/var";
dotenv.config();

export const logout = (req: Request, res: Response) => {
  new Promise<void>((resolve, reject) => {
    req.session!.destroy((error: Error) => {
      if (error) {
        reject(error);
        return res.status(400).json({
          success: false,
          message: `${Var.app.emoji.failure} Failed to logout`,
          payload: {},
        });
      }
      res.clearCookie(process.env.EXPRESS_SESSION_NAME!);
      res.clearCookie("isLogged");
      resolve();

      let responseData = { isSessionActive: false };

      return res.status(200).json({
        success: true,
        message: `${Var.app.emoji.success} Logged out`,
        payload: responseData,
      });
    });
  });
};
