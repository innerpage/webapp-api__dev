import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Resend_EmailVerificationCode_Inputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const middleware_Validate_Account_ReSend_EmailVerificationCode_Inputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Resend_EmailVerificationCode_Inputs.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};
