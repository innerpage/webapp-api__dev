import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Signup_Inputs = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const validate_Signup_Inputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Signup_Inputs.validate(req.body);

  if (error) {
    let errorResponse = {
      success: false,
      message: error.details[0].message,
    };

    return res.json(errorResponse);
  }

  next();
};
