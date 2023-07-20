import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const schema_Email = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const Middleware__Validate__Email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Email.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
