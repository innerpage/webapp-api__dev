import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../../global/var";

const stripeCreateSessionPayloadSchema = Joi.object({
  documentId: Joi.string().required(),
});

export const validateStripeCreateSessionPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = stripeCreateSessionPayloadSchema.validate(req.body);

  if (error) {
    console.log(
      `${Var.app.emoji.failure} Stripe checkout session payload not valid`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  console.log(
    `${Var.app.emoji.success} Stripe checkout session creation payload valid`
  );
  next();
};
