import {
  addToCart,
  deleteInCart,
  updateCart,
  getCart,
} from "../../controllers/order/cart.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/add").post(role.verify, addToCart);

router.route("/delete/:id").delete(role.verify, deleteInCart);

router.route("/update/:id").put(role.verify, updateCart);

router.route("/").get(role.verify, getCart);

module.exports = router;
