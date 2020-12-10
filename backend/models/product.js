const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "title is required",
      text: true,
      maxlength: [32, "Too long title"],
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      text: true,
      maxlength: [2000, "Too long description"],
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: [32, "Too long price"],
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: ["Black", "Brown", "Silver", "White", "Blue"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Acer", "Hector-del-Amo","ZeroDate","Sony","Xiaomi","HollyDrone"],
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
