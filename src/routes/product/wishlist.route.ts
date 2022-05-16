import {
  addToWishlist,
  getWishlist,
} from "../../controllers/product/wishlist.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/").get(role.verify, getWishlist).post(addToWishlist);

module.exports = router;
