import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_EmailVerificationInputs = Joi.object({
  code_EmailVerification: Joi.number().required().min(1000).max(9999),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const middleware_Account__Validate__Inputs_For__EmailVerification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_EmailVerificationInputs.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};