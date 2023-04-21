import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Document_UploadInputs = Joi.object({
  title: Joi.string().required(),
  url_doc: Joi.string().required(),
  price_inr: Joi.number().required(),
  price_usd: Joi.number().required(),
  id_publication: Joi.string().required(),
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
