import {
  approveStaff,
  deleteStaff,
  getListStaff,
  rejectStaff,
  signupStaff,
  staffRequest,
} from "../../controllers/auth/staff.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/staff-request").post(staffRequest);

router
  .route("/list")
  .get(role.verify, role.checkRole(role.ROLES.Admin), getListStaff);

router
  .route("/approve/:staffId")
  .put(role.verify, role.checkRole(role.ROLES.Staff), approveStaff);

router
  .route("/reject/:staffId")
  .put(role.verify, role.checkRole(role.ROLES.Staff), rejectStaff);

router.route("/signup/:token").post(signupStaff);

router
  .route("/:id")
  .delete(role.verify, role.checkRole(role.ROLES.Staff), deleteStaff);

module.exports = router;
