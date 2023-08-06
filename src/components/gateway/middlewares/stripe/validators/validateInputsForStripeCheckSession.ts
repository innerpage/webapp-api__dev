import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const stripeCheckSessionInputSchema = Joi.object({
  sessionId: Joi.string().required(),
});

export const validateInputsForStripeCheckSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = stripeCheckSessionInputSchema.validate(req.body);

  if (error) {
    console.log("❌ Stripe check session inputs not valid");
    return res
      .status(400)
      .json({ success: false, message: `❌ ${error.details[0].message}` });
  }

  console.log("✅ Stripe check session inputs valid");
  next();
};
