import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Stripe_CheckoutSession_Inputs = Joi.object({
  id_Document: Joi.string().required(),
});

export const middleware_Gateway__Validate__Inputs_For__Stripe_CheckoutSession =
  (req: Request, res: Response, next: NextFunction) => {
    let { error } = schema_Stripe_CheckoutSession_Inputs.validate(req.body);

    if (error) {
      console.log("Stripe checkout session creation inputs NOT_VALID");
      return res
        .status(400)
        .json({ success: false, message: `❌ ${error.details[0].message}` });
    }

    console.log("Stripe checkout session creation inputs VALID");
    next();
  };
