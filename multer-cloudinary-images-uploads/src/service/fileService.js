const { uploadToCloudinary } = require("../config/cloudinary");
const fs = require("fs");

const cloudinaryUpload = async (file) => {
  try {
    const cloudinaryResponse = await uploadToCloudinary(file.path);
    fs.unlink(file.path, (err) => {
      if (err) {
        console.log(err);
      }
    });
    return cloudinaryResponse;
  } catch (error) {
    console.error(error);
    throw new Error("Cloudinary upload service failed");
  }
};

module.exports = { cloudinaryUpload };
