import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Document_UploadInputs = Joi.object({
  title: Joi.string().required(),
  sub_title: Joi.string().required(),
  description: Joi.string().required(),
  price_domestic: Joi.number().required(),
  price_international: Joi.number().required(),
});

export const middleware_Validate_Document_UploadInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Document_UploadInputs.validate(req.body);

  if (error) {
    console.log("Document upload inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Document upload inputs VALID");
  next();
};
