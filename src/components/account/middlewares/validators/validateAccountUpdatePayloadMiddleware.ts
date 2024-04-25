import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const accountUpdatePayloadSchema = Joi.object({
  filter: Joi.string().valid("name", "email", "password").required(),
  value: Joi.when("filter", {
    switch: [
      { is: "name", then: Joi.string().required() },
      {
        is: "email",
        then: Joi.string()
          .email({ tlds: { allow: false } })
          .min(5)
          .max(128)
          .lowercase()
          .trim()
          .required(),
      },
      { is: "password", then: Joi.string().min(8).max(1024).required() },
    ],
  }),
});

export const validateAccountUpdatePayloadMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = accountUpdatePayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
