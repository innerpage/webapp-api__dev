import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Inputs_For_ReadingSession = Joi.object({
  id_Document: Joi.string().required(),
  no_Page: Joi.number().min(1).required(),
  id_Socket: Joi.string().required(),
});

export const middleware_Validate_Inputs_For_ReadingSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Inputs_For_ReadingSession.validate(req.body);

  if (error) {
    console.log("Reading session inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Reading session inputs VALID");
  next();
};
