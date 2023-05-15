import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Gateway_CreateInputs = Joi.object({
  name: Joi.string().required(),
  fee_percentage: Joi.number().required(),
  public_key: Joi.string().required(),
  secrey_key: Joi.string().required(),
  webhook_secret: Joi.string().required(),
});

export const middleware_Validate_Gateway_CreateInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Gateway_CreateInputs.validate(req.body);

  if (error) {
    console.log("Gateway creation inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Gateway creation inputs VALID");
  next();
};
