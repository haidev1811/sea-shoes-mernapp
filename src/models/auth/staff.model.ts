import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    business: {
      type: String,
    },
    status: {
      type: String,
      default: "Waiting Approval",
      enum: ["Waiting Approval", "Rejected", "Approved"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
