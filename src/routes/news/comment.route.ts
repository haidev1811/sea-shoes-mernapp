import {
  postComment,
  updateComment,
  deleteComment,
  getComment,
} from "../../controllers/news/comment.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/add").post(role.verify, postComment);

router.route("/list/:id").get(getComment);

router
  .route("/:id")
  .put(role.verify, updateComment)
  .delete(role.verify, deleteComment);

module.exports = router;
