import { v2 as cloudinary } from "cloudinary";
import { createReadStream } from "streamifier";
import { config_Cloudinary } from "../../../config";

export const Helper_Upload_ToCloudinary = (
  file: any,
  name_PublisherBusiness: string,
  title_Publication: string,
  subTitle_Publication: string,
  title_Document: string
) => {
  // Init
  cloudinary.config(config_Cloudinary);
  let options: any = {
    folder: `uploads/${name_PublisherBusiness}/${title_Publication}/${subTitle_Publication}`,
    public_id: title_Document,
  };

  // Upload
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
