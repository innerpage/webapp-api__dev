import { v2 as cloudinary } from "cloudinary";
import { createReadStream } from "streamifier";
import { config_Cloudinary } from "../../../config";

export const Helper_Upload_ToCloudinary = (file: any, name_File: string) => {
  console.log(config_Cloudinary);
  // Init
  cloudinary.config(config_Cloudinary);

  // Upload
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: `docs/${name_File}`,
      },
      (error: any, result: any) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
    createReadStream(file.buffer).pipe(cld_upload_stream);
  });
};
