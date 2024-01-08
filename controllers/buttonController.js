const Button = require("../models/button")


exports.getButtonName = async (req, res) => {
  try {
    const button = await Button.findOne()
    if (!button) {
      res.status(404).json({ error: "Button not found" })
    } else {
      res.json({ name: button.name })
    }
  } catch (error) {
    console.error("Error getting button name:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}


exports.updateButtonName = async (req, res) => {
  const { name } = req.body

  try {
    let button = await Button.findOne()
    if (!button) {
      button = new Button({ name })
    } else {
      button.name = name
    }

    await button.save()
    res.json({ success: true, message: "Button name updated successfully." })
  } catch (error) {
    console.error("Error updating button name:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
