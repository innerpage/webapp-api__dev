import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const mailInputsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  type: Joi.string().trim().required(),
});

export const validateInputsForMailMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = mailInputsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
