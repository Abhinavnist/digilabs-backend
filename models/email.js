// models/Email.js
const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(v)
      },
      message: "Invalid email address",
    },
  },
})

const Email = mongoose.model("Email", emailSchema)

module.exports = Email
