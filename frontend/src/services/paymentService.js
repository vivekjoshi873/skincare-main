export const loadRazorpayCheckout = async (amount, userInfo) => {
  const response = await fetch(
    "http://localhost:5000/api/payments/create-order",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: "order_receipt_" + Date.now(),
      }),
    },
  );

  const order = await response.json();

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Skincare App",
    description: "Purchase Product",
    order_id: order.id,
    handler: async (response) => {
      // Verify payment on backend
      const res = await fetch(
        "http://localhost:5000/api/payments/verify-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        },
      );
      const data = await res.json();
      if (data.status === "success") {
        alert("Payment Successful!");
      } else {
        alert("Payment Verification Failed!");
      }
    },
    prefill: {
      name: userInfo.name,
      email: userInfo.email,
    },
    theme: { color: "#3399cc" },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
