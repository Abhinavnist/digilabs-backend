const Email = require("../models/email")

const storeEmail = async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: "Email is required" })
    }

    const newEmail = new Email({ email })
    await newEmail.save()

    res.status(201).json({ message: "Email stored successfully" })
  } catch (error) {
    console.error("Error storing email:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const getEmails = async (req, res) => {
  try {
    const emails = await Email.find({}, "email")

    res.status(200).json({ emails })
  } catch (error) {
    console.error("Error fetching emails:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const deleteEmail = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ error: "Email ID is required" })
    }

    const deletedEmail = await Email.findByIdAndDelete(id)

    if (!deletedEmail) {
      return res.status(404).json({ error: "Email not found" })
    }

    res.status(200).json({ message: "Email deleted successfully" })
  } catch (error) {
    console.error("Error deleting email:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports = { storeEmail, getEmails, deleteEmail }
