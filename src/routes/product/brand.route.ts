import {
  createBrand,
  deleteBrand,
  getBrand,
  getBrandById,
  getListBrand,
  updateBrand,
} from "../../controllers/product/brand.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router
  .route("/add")
  .post(role.verify, role.checkRole(role.ROLES.Staff), createBrand);

router.route("/list").get(getBrand);

router
  .route("/:id")
  .get(role.verify, role.checkRole(role.ROLES.Staff), getBrandById)
  .put(role.verify, role.checkRole(role.ROLES.Staff), updateBrand)
  .delete(role.verify, role.checkRole(role.ROLES.Staff), deleteBrand);

router
  .route("/")
  .get(role.verify, role.checkRole(role.ROLES.Staff), getListBrand);

module.exports = router;
