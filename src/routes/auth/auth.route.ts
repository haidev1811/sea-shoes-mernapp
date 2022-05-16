import {
  loginUser,
  registerUser,
  loginGoogle,
  forgotUser,
  resetUser,
  resetUserToken,
} from "../../controllers/auth/auth.controller";
const router = require("express").Router();

//LOGIN
router.route("/login").post(loginUser);

//REGISTER
router.route("/register").post(registerUser);

//LOGIN GOOGLE
router.route("/google").post(loginGoogle);

//FORGOT
router.route("/forgot").post(forgotUser);

//RESET
router.route("/reset").post(resetUser);

//RESET-TOKEN
router.route("/reset/:token").post(resetUserToken);

module.exports = router;
