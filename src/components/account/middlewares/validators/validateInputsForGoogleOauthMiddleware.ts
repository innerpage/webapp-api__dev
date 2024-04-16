import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const googleOauthInputsSchema = Joi.object({
  token: Joi.string().required(),
});

export const validateInputsForGoogleOauthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = googleOauthInputsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `❌ ${error.details[0].message}`,
    });
  }

  next();
};
