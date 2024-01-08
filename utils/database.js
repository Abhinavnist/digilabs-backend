const mongoose = require("mongoose")

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/mode-ui", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message)
    process.exit(1)
  }
}

module.exports = connectToDatabase
