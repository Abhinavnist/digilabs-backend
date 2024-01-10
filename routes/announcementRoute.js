const express = require("express")
const router = express.Router()
const announcementController = require("../controllers/announcement")

router.get("/announcement", announcementController.getAnnouncementName)

router.put("/announcement", announcementController.updateAnnouncementName)

module.exports = router
