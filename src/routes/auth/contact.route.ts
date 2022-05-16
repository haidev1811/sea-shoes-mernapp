import { newContact } from "../../controllers/auth/contact.controller";
const router = require("express").Router();
const role = require("../../middlewares/authMiddleware");

router.route("/add").post(newContact);

module.exports = router;
