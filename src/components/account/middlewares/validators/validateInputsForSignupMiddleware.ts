import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const signupInputsSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
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
  let { error } = signupInputsSchema.validate(req.body);

  if (error) {
    console.log("Signup inputs not valid");
    return res
      .status(400)
      .json({ success: false, message: `❌ ${error.details[0].message}` });
  }

  console.log("Signup inputs valid");
  next();
};
