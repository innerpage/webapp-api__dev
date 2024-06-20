import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const signupPayloadSchema = Joi.object({
  userName: Joi.string().max(1024).required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const validateSignupPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = signupPayloadSchema.validate(req.body);

  if (error) {
    console.log(`${Var.app.emoji.failure} Signup payload not valid`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  console.log(`${Var.app.emoji.success} Signup payload valid`);
  next();
};
