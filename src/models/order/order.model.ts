import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: {
      type: Array,
    },
    fullname: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    shippingAddress: { type: String },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "failed", "expired", "paid", "refunding", "refunded"],
      default: "unpaid",
    },
    deliveryStatus: {
      type: String,
      enum: [
        "unfulfilled",
        "shipping",
        "shipped",
        "arrived",
        "colleted",
        "returning",
      ],
      default: "unfulfilled",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
