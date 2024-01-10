const Announcement = require("../models/announcement")

exports.getAnnouncementName = async (req, res) => {
  try {
    const announcement = await Announcement.findOne()
    if (!announcement) {
      res.status(404).json({ error: "Announcement not found" })
    } else {
      res.json({ name: announcement.name })
    }
  } catch (error) {
    console.error("Error getting announcement name:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

exports.updateAnnouncementName = async (req, res) => {
  const { name } = req.body

  try {
    let announcement = await Announcement.findOne()
    if (!announcement) {
      announcement = new Announcement({ name })
    } else {
      announcement.name = name
    }

    await announcement.save()
    res.json({
      success: true,
      message: "Announcement name updated successfully.",
    })
  } catch (error) {
    console.error("Error updating announcement name:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
