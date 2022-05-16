import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  getProductBySlug,
  getProductsByBrand,
  getProductsByFilter,
  searchProductByName,
  updateProduct,
} from "../../controllers/product/product.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/list").get(getProductsByFilter);

router.route("/brand/:id").get(getProductsByBrand);

router
  .route("/item/:id")
  .get(role.verify, getProductById)
  .delete(role.verify, role.checkRole(role.ROLES.Staff), deleteProduct)
  .put(role.verify, role.checkRole(role.ROLES.Staff), updateProduct);

router.route("/search/:name").get(searchProductByName);

router.route("/:slug").get(getProductBySlug);

router
  .route("/")
  .get(getProduct)
  .post(
    role.verify,
    role.checkRole(role.ROLES.Staff),
    role.checkRole(role.ROLES.Admin),
    createProduct
  );

module.exports = router;
