import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dyw2d6sdx",
  api_key:"455566585267628",
  api_secret:"VgUuYNX_JMu0cj7wLBFr3uyQ6NY",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
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