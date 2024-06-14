import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const passwordResetPayloadSchema = Joi.object({
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
});

export const validatePasswordConfirmationPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = passwordResetPayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
