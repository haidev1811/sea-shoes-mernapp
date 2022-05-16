import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
