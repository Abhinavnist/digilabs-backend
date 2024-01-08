const express = require("express")
const router = express.Router()
const emailController = require("../controllers/emailController")

router.post("/store-email", emailController.storeEmail)

router.get("/get-emails", emailController.getEmails)

router.delete("/email/delete/:id", emailController.deleteEmail)

module.exports = router
