import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { Var } from "../../var";

const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const ValidateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = emailSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
