import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_EmailVerificationCode = Joi.object({
  code_EmailVerification: Joi.number().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const middleware_Validate_Account_EmailVerificationCode = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_EmailVerificationCode.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  let { email } = req.body;
  res.locals.email = email;

  next();
};
