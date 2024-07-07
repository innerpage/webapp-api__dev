import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const activityPayloadSchema = Joi.object({
  range: Joi.string().min(4).required(),
  startDate: Joi.string().required().allow(""),
  endDate: Joi.string().required().allow(""),
});

export const validateActivityPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = activityPayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
