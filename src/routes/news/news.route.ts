import {
  addNews,
  getListNews,
  getNewsBySlug,
  getNewsById,
  updateNews,
  deleteNews,
  getNewss,
} from "../../controllers/news/news.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router
  .route("/add")
  .post(role.verify, role.checkRole(role.ROLES.Staff), addNews);

router.route("/list").get(getListNews);

router
  .route("/item/:id")
  .get(role.verify, role.checkRole(role.ROLES.Staff), getNewsById)
  .put(role.verify, role.checkRole(role.ROLES.Staff), updateNews)
  .delete(role.verify, role.checkRole(role.ROLES.Staff), deleteNews);

router.route("/:slug").get(getNewsBySlug);

router.route("/").get(getNewss);

module.exports = router;
