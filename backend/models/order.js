const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    products: Array,

    cartTotal: { type: Number, trim: true },
    ordredBy: String,
    userAddress: String,
    userPhone: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
