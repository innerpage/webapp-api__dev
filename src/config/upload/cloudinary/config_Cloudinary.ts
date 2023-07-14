import dotenv from "dotenv";
dotenv.config();

interface Obj_CloudinaryConfig {
  cloud_name?: string;
  api_key?: string;
  api_secret?: string;
}

export const config_Cloudinary: Obj_CloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};
