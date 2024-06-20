import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const userNameAvailabilityPayloadSchema = Joi.object({
  userName: Joi.string().max(1024).required(),
});

export const validateUserNameAvailabilityPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = userNameAvailabilityPayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
