import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Publisher_EnrollInputs = Joi.object({
  business_Name: Joi.string().required(),
  business_Address: Joi.string().required(),
  support_Email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  url_Website: Joi.string().required(),
  url_Dl: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  tax_Type: Joi.string().required(),
  tax_Percentage: Joi.string().required(),
  id_Tax: Joi.string().required(),
});

export const middleware_Validate_Publisher_EnrollInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Publisher_EnrollInputs.validate(req.body);

  if (error) {
    console.log("Publisher enroll inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Publisher enroll inputs VALID");
  next();
};
