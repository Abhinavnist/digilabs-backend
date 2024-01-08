const express = require("express")
const router = express.Router()
const buttonController = require("../controllers/buttonController")

router.get("/button", buttonController.getButtonName)

router.put("/button", buttonController.updateButtonName)

module.exports = router
