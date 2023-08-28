const express = require("express");
const router = express.Router();

const Middleware = require("../controller/Middleware");
const Slider = require("../controller/Slider");

router
  .route("/bot-slider")
  .get(Slider.getSlider)
  .post(Middleware.uploads.single("image"), Slider.addSlider);

router.route("/bot-slider/:id").delete(Slider.deleteSlider);

router
  .route("/bot-slider/:id")
  .get(Slider.getEditSlider)
  .put(Slider.editSlider);

module.exports = router;
