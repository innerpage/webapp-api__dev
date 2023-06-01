import { Request, Response } from "express";

export const controller_Library_GetAll_Readings = (
  req: Request,
  res: Response
) => {
  return res.status(200).send("GET on /readings ");
};
