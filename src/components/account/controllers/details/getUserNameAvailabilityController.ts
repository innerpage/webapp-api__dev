import { Request, Response } from "express";
import { Var } from "../../../../global/var";

export const getUserNameAvailabilityController = async (
  req: Request,
  res: Response
) => {
  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Username available`,
  });
};
