import dotenv from "dotenv";
dotenv.config();

interface Obj_CloudinaryConfig {
  name__Cloud?: string;
  api__Key?: string;
  api__Secret?: string;
}

export const config_Cloudinary: Obj_CloudinaryConfig = {
  name__Cloud: process.env.CLOUDINARY_CLOUD_NAME,
  api__Key: process.env.CLOUDINARY_API_KEY,
  api__Secret: process.env.CLOUDINARY_API_SECRET,
};
