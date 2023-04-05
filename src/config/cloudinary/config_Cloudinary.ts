import dotenv from "dotenv";
dotenv.config();

interface Obj_CloudinaryConfig {
  name_Cloud?: string;
  api_Key?: string;
  api_Secret?: string;
}

export const config_Cloudinary: Obj_CloudinaryConfig = {
  name_Cloud: process.env.CLOUDINARY_CLOUD_NAME,
  api_Key: process.env.CLOUDINARY_API_KEY,
  api_Secret: process.env.CLOUDINARY_API_SECRET,
};
