import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const resetPasswordInputsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  newPassword: Joi.string().trim().min(8).required(),
  newPasswordRepeat: Joi.string()
    .equal(Joi.ref("newPassword"))
    .trim()
    .required(),
  passwordResetCode: Joi.number().required().min(1000).max(9999),
});

export const validateInputsForPasswordConfirmationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = resetPasswordInputsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
