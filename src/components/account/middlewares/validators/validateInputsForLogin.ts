import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_LoginInputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const validateInputsForLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_LoginInputs.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
