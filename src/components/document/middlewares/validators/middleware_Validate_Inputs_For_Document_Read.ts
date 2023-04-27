import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Inputs_For_Document_Read = Joi.object({
  id_Document: Joi.string().required(),
});

export const middleware_Validate_Inputs_For_Document_Read = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Inputs_For_Document_Read.validate(req.query);

  if (error) {
    console.log("Document read inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Document read inputs VALID");
  next();
};
