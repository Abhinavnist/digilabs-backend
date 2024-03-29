const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectToDatabase = require("./utils/database")
const navRoutes = require("./routes/navRoutes")
const buttonRoutes = require("./routes/buttonRoutes")
const emailRoutes = require("./routes/emailRoutes")
const announcementRoutes = require("./routes/announcementRoute")

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use("/uploads", express.static("uploads"))

connectToDatabase()

app.use("/api", navRoutes)
app.use("/api", buttonRoutes)
app.use("/api", emailRoutes)
app.use("/api", announcementRoutes)

app.get("/", (req, res) => {
  res.send("Success")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// https://digilabs-backend-phi.vercel.app/api/
