import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_MailPasswordResetInputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const middleware_Account_Validate_Inputs_For_Mail_Reset_Password = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_MailPasswordResetInputs.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
