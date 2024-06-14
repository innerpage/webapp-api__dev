import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const mailPayloadSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  type: Joi.string().trim().required(),
});

export const validateMailPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = mailPayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
