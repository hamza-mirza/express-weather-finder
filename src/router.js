const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderHomePage)
router.post("/", controller.getWeather)
router.get("/about", controller.renderAboutPage)

module.exports = router