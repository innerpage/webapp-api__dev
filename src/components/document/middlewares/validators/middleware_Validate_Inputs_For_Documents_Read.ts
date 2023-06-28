import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Inputs_For_Documents_Read = Joi.object({
  id_Publication: Joi.string().required(),
});

export const middleware_Validate_Inputs_For_Documents_Read = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Inputs_For_Documents_Read.validate(req.body);

  if (error) {
    console.log("Documents read inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: `❌ ${error.details[0].message}` });
  }

  console.log("Documents read inputs VALID");
  next();
};
