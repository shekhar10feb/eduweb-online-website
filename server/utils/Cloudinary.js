const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: `${process.env.MONTY_CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.MONTY_CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.MONTY_CLOUDINARY_API_SECRET}`,
});

const uploadOnCloudinaryForUser = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "User_images_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryForAuthor = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "Author_images_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryForMember = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "Member_images_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryFor_Question_paper = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "Question_paper_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryForAds_Upload = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "Ads_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryForCollegeCoverImage = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "College_Cover_Image_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadNewAndDeleteOldOnCloudinaryForCoverImage = async (
  cloudinary_college_details_brochure_public_id,
  localFilePath
) => {
  try {
    if (!cloudinary_college_details_brochure_public_id && !localFilePath)
      return null;

    await cloudinary.uploader.destroy(
      cloudinary_college_details_brochure_public_id
    );

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "College_Cover_Image_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryForCollegeProfileImage = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "College_Profile_Image_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadNewAndDeleteOldOnCloudinaryForProfileImage = async (
  cloudinary_profile_image_public_id,
  localFilePath
) => {
  try {
    if (!cloudinary_profile_image_public_id && !localFilePath) return null;

    await cloudinary.uploader.destroy(cloudinary_profile_image_public_id);

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "College_Profile_Image_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadOnCloudinaryForCollegeDetailsBrochure = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "College_Details_Brochure_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadNewAndDeleteOldOnCloudinaryForCollegeDetailsBrochure = async (
  cloudinary_college_details_brochure_public_id,
  localFilePath
) => {
  try {
    if (!cloudinary_college_details_brochure_public_id && !localFilePath)
      return null;

    await cloudinary.uploader.destroy(
      cloudinary_college_details_brochure_public_id,
      { resource_type: "raw" }
    );

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "College_Details_Brochure_folder",
      resource_type: "auto",
    });

    // Remove the locally saved temporary file as the upload operation got success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

// Delete image from cloudinary
const delete_Image_from_Cloudinary = async (public_id) => {
  try {
    if (!public_id) return null;

    await cloudinary.uploader.destroy(public_id);

    return null;
  } catch (error) {
    return null;
  }
};

// Delete cover image and profile image from cloudinary
const delete_College_Cover_Image_from_Cloudinary = async (
  cover_image_public_id
) => {
  try {
    if (!cover_image_public_id) return null;

    await cloudinary.uploader.destroy(cover_image_public_id);

    return null;
  } catch (error) {
    return null;
  }
};

module.exports = {
  uploadOnCloudinaryForUser,
  uploadOnCloudinaryForAuthor,
  uploadOnCloudinaryForMember,
  uploadOnCloudinaryFor_Question_paper,
  uploadOnCloudinaryForAds_Upload,
  uploadOnCloudinaryForCollegeCoverImage,
  uploadNewAndDeleteOldOnCloudinaryForCoverImage,
  uploadOnCloudinaryForCollegeProfileImage,
  uploadNewAndDeleteOldOnCloudinaryForProfileImage,
  uploadOnCloudinaryForCollegeDetailsBrochure,
  uploadNewAndDeleteOldOnCloudinaryForCollegeDetailsBrochure,
  delete_Image_from_Cloudinary,
  delete_College_Cover_Image_from_Cloudinary,
};
