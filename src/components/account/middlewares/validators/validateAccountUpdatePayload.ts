import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const accountUpdatePayloadSchema = Joi.object({
  filter: Joi.string().valid("userName", "password").required(),
  value: Joi.when("filter", {
    switch: [
      { is: "userName", then: Joi.string().required() },
      { is: "password", then: Joi.string().min(8).max(1024).required() },
    ],
  }),
});

export const validateAccountUpdatePayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = accountUpdatePayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
