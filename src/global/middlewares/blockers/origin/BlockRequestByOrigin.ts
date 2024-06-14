import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

export const BlockRequestByOrigin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Var.node.env === "prod") {
    if (res.locals.origin != Var.app.url.prod) {
      console.log(
        `${Var.app.emoji.failure} ${res.locals.origin} is not an authorized origin`
      );
      return res.status(200).json({
        success: false,
        message: `${Var.app.emoji.failure} You are not authorized to make this request`,
      });
    }
  }
  console.log(
    `${Var.app.emoji.success} ${res.locals.origin} is authorized origin`
  );
  next();
};
