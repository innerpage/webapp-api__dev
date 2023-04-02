import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Enroll_Inputs = Joi.object({
  business_name: Joi.string().required(),
  business_address: Joi.string().required(),
  product_name: Joi.string().required(),
  support_email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  website: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  tax_type: Joi.string().required(),
  tax_id: Joi.string().required(),
  tax_value: Joi.string().required(),
});

export const middleware_Validate_Publisher_EnrollInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Enroll_Inputs.validate(req.body);

  if (error) {
    console.log("Publisher enroll inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Publisher enroll inputs VALID");
  next();
};
