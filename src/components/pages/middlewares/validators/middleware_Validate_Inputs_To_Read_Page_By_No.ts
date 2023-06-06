import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema_Inputs_To_Read_Page_By_No = Joi.object({
  id_Document: Joi.string().required(),
  no_Page: Joi.number().required().min(1),
});

export const middleware_Validate_Inputs_To_Read_Page_By_No = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = schema_Inputs_To_Read_Page_By_No.validate(req.body);

  if (error) {
    console.log("Read page inputs NOT_VALID");
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  console.log("Read page inputs VALID");
  next();
};
