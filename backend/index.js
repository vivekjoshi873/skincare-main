const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./src/routes/payments.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Skincare Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
