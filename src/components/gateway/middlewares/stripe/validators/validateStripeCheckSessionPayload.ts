import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../../global/var";

const stripeCheckSessionPayloadSchema = Joi.object({
  sessionId: Joi.string().required(),
});

export const validateStripeCheckSessionPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = stripeCheckSessionPayloadSchema.validate(req.body);

  if (error) {
    console.log(
      `${Var.app.emoji.failure} Stripe check session payload not valid`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  console.log(`${Var.app.emoji.success} Stripe check session payload valid`);
  next();
};
