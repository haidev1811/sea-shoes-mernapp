import mongoose from "mongoose";
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
    },
    role: {
      type: Array,
      required: true,
      default: ["user"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
