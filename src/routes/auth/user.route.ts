import {
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
} from "../../controllers/auth/user.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router
  .route("/profile")
  .get(role.verify, getUserProfile)
  .put(role.verify, updateUserProfile);

router
  .route("/:id")
  .get(role.verify, role.checkRole(role.ROLES.Admin), getUserById)
  .put(role.verify, role.checkRole(role.ROLES.Admin), updateUser)
  .delete(role.verify, role.checkRole(role.ROLES.Admin), deleteUser);

router.route("/").get(role.verify, role.checkRole(role.ROLES.Admin), getUsers);

module.exports = router;
