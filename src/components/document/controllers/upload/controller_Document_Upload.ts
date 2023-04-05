import { Request, Response } from "express";
import { Helper_Upload_ToCloudinary } from "../../../../global/helpers";

export const controller_Document_Upload = async (
  req: Request,
  res: Response
) => {
  // Init
  const files: any = req.files;

  // Save files to Cloudinary
  let result: any = await Helper_Upload_ToCloudinary(
    files[0],
    res.locals.title
  );
  let url_Doc: string = result.secure_url;

  res.status(200).send("POST on /upload ");
};
