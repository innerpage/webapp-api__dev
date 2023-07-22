import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Stripe_CheckSession_Inputs = Joi.object({
  id_Session: Joi.string().required(),
});

export const middleware_Gateway_Validate_Inputs_For_Stripe_CheckSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Stripe_CheckSession_Inputs.validate(req.body);

  if (error) {
    console.log("Stripe check session inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: `❌ ${error.details[0].message}` });
  }

  console.log("Stripe check session inputs VALID");
  next();
};
