import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_ResetPasswordInputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password_New: Joi.string().trim().min(8).required(),
  password_New_Repeat: Joi.string()
    .equal(Joi.ref("password_New"))
    .trim()
    .required(),
  code_ResetPassword: Joi.number().required().min(1000).max(9999),
});

export const validateInputsForPasswordConfirmationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_ResetPasswordInputs.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
