import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const emailVerificationPayloadSchema = Joi.object({
  type: Joi.string().trim().valid("email", "password-reset").required(),
  code: Joi.string().trim().required(),
});

export const validateEmailVerificationPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = emailVerificationPayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
