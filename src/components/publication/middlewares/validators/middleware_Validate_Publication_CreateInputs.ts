import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Publication_CreateInputs = Joi.object({
  title: Joi.string().required(),
  sub_title: Joi.string().required(),
  description: Joi.string().required(),
  url_sample: Joi.string().required(),
  url_toc: Joi.string().required(),
  url_cover: Joi.string().required(),
});

export const middleware_Validate_Publication_CreateInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Publication_CreateInputs.validate(req.body);

  if (error) {
    console.log("Publication creation inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Publication creation inputs VALID");
  next();
};
