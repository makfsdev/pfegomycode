const Order = require("../models/order");
const User = require("../models/user");

exports.userOrder = async (req, res) => {
  try {
    // console.log(req.body);

    const newOrder = await new Order(req.body).save();
    res.json(newOrder);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create cart failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.getUserOrder = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec();
    console.log("user", user);
    let order = await Order.findOne({ ordredBy: user.email })
      .sort({ createdAt: -1 })
      .limit(1)
      .exec();
    const { products, cartTotal, ordredBy, userAddress, userPhone } = order;

    res.json({ products, cartTotal, ordredBy, userAddress, userPhone });
  } catch (err) {
    console.error(err);
  }
};

exports.ordersCount = async (req, res) => {
  let totalOrders = await Order.find({}).estimatedDocumentCount().exec();
  res.json(totalOrders);
};

exports.ordersSold = async (req, res) => {
  let listOrders = await Order.find({}).exec();

  res.json(listOrders);
};
