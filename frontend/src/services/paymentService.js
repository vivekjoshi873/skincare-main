const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const loadRazorpayCheckout = async (amount, userInfo) => {
  if (!window.Razorpay) {
    throw new Error("Razorpay SDK not loaded");
  }

  const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!keyId) {
    throw new Error("Missing VITE_RAZORPAY_KEY_ID");
  }

  const response = await fetch(`${API_BASE_URL}/api/payments/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount,
      currency: "INR",
      receipt: "order_receipt_" + Date.now(),
    }),
  });

  const order = await response.json();
  if (!response.ok) {
    throw new Error(order?.error || "Failed to create Razorpay order");
  }

  return new Promise((resolve, reject) => {
    const options = {
      key: keyId,
      amount: order.amount,
      currency: order.currency,
      name: "Skincare App",
      description: "Purchase Product",
      order_id: order.id,
      handler: async (paymentResponse) => {
        try {
          const verifyResponse = await fetch(
            `${API_BASE_URL}/api/payments/verify-payment`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(paymentResponse),
            },
          );
          const verifyData = await verifyResponse.json();

          if (!verifyResponse.ok || verifyData.status !== "success") {
            reject(
              new Error(
                verifyData?.message || "Payment verification failed on server",
              ),
            );
            return;
          }

          resolve(verifyData);
        } catch (error) {
          reject(error);
        }
      },
      modal: {
        ondismiss: () => reject(new Error("Payment popup closed")),
      },
      prefill: {
        name: userInfo?.name,
        email: userInfo?.email,
        contact: userInfo?.contact,
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  });
};
