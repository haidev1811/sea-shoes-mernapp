import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    street: { type: String },
    town: { type: String },
    district: { type: String },
    province: { type: String },
    isDefault: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
