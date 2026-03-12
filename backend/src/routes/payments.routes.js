const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const razorpay = require("../config/razorpay");

router.post("/create-order", async (req, res) => {
  const { amount, currency, receipt } = req.body;
  try {
    const options = {
      amount: amount * 100, // amount in paisa
      currency,
      receipt,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const generated_signature = hmac.digest("hex");

  if (generated_signature === razorpay_signature) {
    res.json({ status: "success", message: "Payment verified successfully" });
  } else {
    res
      .status(400)
      .json({ status: "failure", message: "Payment verification failed" });
  }
});

module.exports = router;
