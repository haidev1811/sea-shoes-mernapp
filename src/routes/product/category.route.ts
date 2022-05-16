import {
  createNewCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  getListCategory,
  updateCategory,
} from "../../controllers/product/category.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router
  .route("/add")
  .post(role.verify, role.checkRole(role.ROLES.Staff), createNewCategory);

router.route("/list").get(getCategory);

router
  .route("/:id")
  .get(role.verify, role.checkRole(role.ROLES.Staff), getCategoryById)
  .put(role.verify, role.checkRole(role.ROLES.Staff), updateCategory)
  .delete(role.verify, role.checkRole(role.ROLES.Staff), deleteCategory);

router
  .route("/")
  .get(role.verify, role.checkRole(role.ROLES.Staff), getListCategory);

module.exports = router;
