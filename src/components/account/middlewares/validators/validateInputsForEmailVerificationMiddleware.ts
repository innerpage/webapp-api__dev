import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const emailVerificationInputsSchema = Joi.object({
  emailVerificationCode: Joi.number().required().min(1000).max(9999),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const validateInputsForEmailVerificationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = emailVerificationInputsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};