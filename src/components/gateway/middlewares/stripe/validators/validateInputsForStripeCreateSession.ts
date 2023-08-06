import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const stripeCreateSessionInputSchema = Joi.object({
  documentId: Joi.string().required(),
});

export const validateInputsForStripeCreateSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = stripeCreateSessionInputSchema.validate(req.body);

  if (error) {
    console.log("Stripe checkout session creation inputs not valid");
    return res
      .status(400)
      .json({ success: false, message: `❌ ${error.details[0].message}` });
  }

  console.log("Stripe checkout session creation inputs valid");
  next();
};
