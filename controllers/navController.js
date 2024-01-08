const cloudinary = require("cloudinary").v2
const Photo = require("../models/navModel")

cloudinary.config({
  cloud_name: "dctct5odm",
  api_key: "563635261134469",
  api_secret: "Xgajo3gPcp9i1X27UEyxUM0auxM",
})

const uploadPhoto = async (req, res) => {
  try {
    const base64Photo = req.file.buffer.toString("base64")

    const cloudinaryUploadResult = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Photo}`,
      {
        folder: "uploads",
        format: "png",
      }
    )

    let storedPhoto = await Photo.findOne()

    if (!storedPhoto) {
      const newPhoto = new Photo({ photo: cloudinaryUploadResult.secure_url })
      await newPhoto.save()
    } else {
      storedPhoto.photo = cloudinaryUploadResult.secure_url
      await storedPhoto.save()
    }

    res.json({
      success: true,
      message: "Photo uploaded and stored successfully.",
    })
  } catch (error) {
    console.error("Error uploading and storing photo:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const getUploadedPhoto = async (req, res) => {
  try {
    const storedPhoto = await Photo.findOne()

    if (!storedPhoto) {
      res.status(404).json({ error: "No photo found." })
    } else {
      res.json({ photo: storedPhoto.photo })
    }
  } catch (error) {
    console.error("Error retrieving photo:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports = { uploadPhoto, getUploadedPhoto }
