const express = require("express");
const router = express.Router();

const Middleware = require("../controller/Middleware");
const Product = require("../controller/Product");

router
  .route("/product")
  .get(Product.getProduct)
  .post(Middleware.uploads.single("image"), Product.addProduct);

router.route("/product/:id").delete(Product.deleteProduct);

router.route("/product/:id/:number").get(Product.getEditProduct);
router
  .route("/product/:prodId/:num")
  .patch(Middleware.uploads.single("image"), Product.editProduct);

module.exports = router;
