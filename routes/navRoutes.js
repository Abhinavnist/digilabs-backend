const express = require("express")
const multer = require("multer")
const photoController = require("../controllers/navController")

const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/upload", upload.single("photo"), photoController.uploadPhoto)
router.get("/photo", photoController.getUploadedPhoto)

module.exports = router
