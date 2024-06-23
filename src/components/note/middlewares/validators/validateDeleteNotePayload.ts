import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Var } from "../../../../global/var";

const deleteNotePayloadSchema = Joi.object({
  noteId: Joi.string(),
});

export const validateDeleteNotePayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { error } = deleteNotePayloadSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} ${error.details[0].message}`,
    });
  }

  next();
};
