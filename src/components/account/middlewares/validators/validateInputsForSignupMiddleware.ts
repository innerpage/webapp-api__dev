import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Signup_Inputs = Joi.object({
  name_First: Joi.string().required(),
  name_Last: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .required(),
  password: Joi.string().min(8).max(1024).trim().required(),
});

export const validateInputsForSignupMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Signup_Inputs.validate(req.body);

  if (error) {
    console.log("Signup inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: `❌ ${error.details[0].message}` });
  }

  console.log("Signup inputs VALID");
  next();
};
