import {
  createNewOrder,
  getListOrder,
  getDetailOrder,
  getMyOrders,
  updateStatusOrder,
  cancelOrder,
} from "../../controllers/order/order.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/add").post(role.verify, createNewOrder);

router.route("/myorder").get(role.verify, getMyOrders);

router
  .route("/status/:id")
  .put(role.verify, role.checkRole(role.ROLES.Staff), updateStatusOrder);

router
  .route("/:id")
  .get(role.verify, getDetailOrder)
  .delete(role.verify, cancelOrder);

router
  .route("/")
  .get(role.verify, role.checkRole(role.ROLES.Staff), getListOrder);

module.exports = router;
