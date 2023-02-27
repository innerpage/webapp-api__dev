import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Login_Inputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const middleware_Validate_Account_LoginInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Login_Inputs.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};
