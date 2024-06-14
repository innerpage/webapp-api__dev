import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const googleOauthPayloadSchema = Joi.object({
  token: Joi.string().required(),
});

export const validateGoogleOauthPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = googleOauthPayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }
  console.log(`${Var.app.emoji.success} validateGoogleOauthPayload validated`);
  next();
};
