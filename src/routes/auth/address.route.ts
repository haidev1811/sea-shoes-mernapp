import {
  createAddress,
  deleteAddress,
  getAddress,
  getAddressById,
  updateAddress,
} from "../../controllers/auth/address.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/add").post(createAddress);

router
  .route("/:id")
  .get(role.verify, getAddressById)
  .put(role.verify, updateAddress)
  .delete(role.verify, deleteAddress);

router.route("/").get(role.verify, getAddress);

module.exports = router;
