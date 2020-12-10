const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controller
const {
  userOrder,
  getUserOrder,
  ordersCount,
  ordersSold,
} = require("../controllers/order");

router.post("/order", userOrder);
router.get("/order", authCheck, getUserOrder);

router.get("/orders/total", ordersCount);
router.get("/orders", ordersSold);

module.exports = router;
