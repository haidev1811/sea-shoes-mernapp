import {
  countReview,
  deleteReview,
  filterByStar,
  getReview,
  postReview,
  updateReview,
} from "../../controllers/product/review.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/add").post(role.verify, postReview);

router.route("/filter").post(filterByStar);

router.route("/count").get(role.verify, countReview);

router.route("/list/:id").get(getReview);

router
  .route("/:id")
  .put(role.verify, updateReview)
  .delete(role.verify, deleteReview);

module.exports = router;
