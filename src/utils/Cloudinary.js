import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on Cloudinary
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return response;
    //file has been uploaded Successfully
    console.log("File is Uploaded in Cloudinary", response.url);
  } catch (error) {
    fs.unlinkSync(localFilePath); //unlink the locally saved temporary file as the upload oprations got faield
    return null;
  }
};


export {uploadOnCloudinary};