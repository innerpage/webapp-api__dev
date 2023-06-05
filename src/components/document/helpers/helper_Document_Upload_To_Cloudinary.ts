import { v2 as cloudinary } from "cloudinary";
import { config_Cloudinary } from "../../../config";

export const helper_Document_Upload_To_Cloudinary = async (
  path_Page: any,
  name_Publisher_Business: string,
  title_Publication: string,
  edition_Publication: string,
  title_Document: string
) => {
  cloudinary.config(config_Cloudinary);

  let options: any = {
    folder: `uploads/${name_Publisher_Business}/${title_Publication}/${edition_Publication}/${title_Document}`,
  };

  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      path_Page,
      options,
      (error: any, result: any) => {
        if (error) return false;
        resolve(result);
      }
    );
  });
};
