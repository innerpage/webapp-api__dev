import { v2 as cloudinary } from "cloudinary";
import { createReadStream } from "streamifier";
import { config_Cloudinary } from "../../../config";

export const helper_Document_Upload_To_Cloudinary = async (
  file: any,
  name_Publisher_Business: string,
  title_Publication: string,
  edition_Publication: string,
  title_Document: string
) => {
  cloudinary.config(config_Cloudinary);
  let options: any = {
    folder: `uploads/${name_Publisher_Business}/${title_Publication}/${edition_Publication}`,
    public_id: title_Document,
  };

  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      options,
      (error: any, result: any) => {
        console.log(3);
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
