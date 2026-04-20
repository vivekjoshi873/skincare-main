import React, { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { AddCart } from "../context/AddCart";
import { useAuth } from "../context/AuthContext";
import { loadRazorpayCheckout } from "../services/paymentService";

const deliveryOptions = [
  {
    id: "standard",
    label: "Standard",
    description: "Arrives in 3-5 business days",
    price: 0,
  },
  {
    id: "express",
    label: "Express",
    description: "Arrives in 1-2 business days",
    price: 220,
  },
  {
    id: "midnight",
    label: "Mid-night drop",
    description: "Same night delivery within metros",
    price: 420,
  },
];

const Checkout = () => {
  const { cart, clearCart, addPurchaseHistory } = useContext(AddCart);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedDelivery, setSelectedDelivery] = useState(
    deliveryOptions[0].id,
  );
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [formData, setFormData] = useState({
    email: user?.email || "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    notes: "",
  });

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0,
      ),
    [cart],
  );

  const currentDelivery = deliveryOptions.find(
    (option) => option.id === selectedDelivery,
  );
  const shippingCost = currentDelivery?.price ?? 0;
  const savings = subtotal >= 4000 ? 400 : Math.round(subtotal * 0.05);
  const total = Math.max(subtotal - savings + shippingCost, 0);
  const isCartEmpty = cart.length === 0;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyPromo = (event) => {
    event.preventDefault();
    if (!promoInput.trim()) {
      setPromoMessage("Add a promo code to unlock a surprise reward.");
      return;
    }
    setPromoMessage(
      `Promo "${promoInput.trim().toUpperCase()}" saved. We will apply the best benefit at billing.`,
    );
    setPromoInput("");
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    if (!cart.length) {
      navigate("/allproduct");
      return;
    }

    try {
      await loadRazorpayCheckout(total, {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      });
      addPurchaseHistory({
        items: cart,
        total,
        shippingCost,
        savings,
        deliveryType: selectedDelivery,
        customer: formData,
      });
      clearCart();
      setOrderPlaced(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      alert("Payment failed or cancelled: " + error.message);
    }
  };

  const currency = (value) => `₹${value.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10 sm:py-14">
        <div className="mb-10 sm:mb-14 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
            Checkout journey
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Process to checkout with ease
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Secure payments powered by Razorpay.
          </p>
        </div>

        {orderPlaced && (
          <div className="rounded-3xl bg-green-50 border border-green-100 p-6 mb-8">
            <p className="font-semibold text-green-800">
              Order successfully placed!
            </p>
            <p className="text-sm text-green-700 mt-1">
              Your skincare ritual is being prepared. Check your email for
              details.
            </p>
          </div>
        )}

        {isCartEmpty ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center space-y-4">
            <p className="text-xl font-medium">Your ritual bag is empty.</p>
            <Link
              to="/allproduct"
              className="inline-block rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Shop all products
            </Link>
          </div>
        ) : (
          <form
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start"
            onSubmit={handlePlaceOrder}
          >
            <section className="space-y-6">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                <h2 className="text-lg font-semibold">Contact details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    First name
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                    />
                  </label>
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Last name
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                    />
                  </label>
                </div>
                <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Address
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                  />
                </label>
              </div>

              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                <h2 className="text-lg font-semibold">Payment Method</h2>
                <div className="p-4 rounded-2xl border border-black bg-black bg-opacity-[0.02] flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Razorpay Checkout</p>
                    <p className="text-sm text-gray-500">
                      UPI, Cards, and QR Payment
                    </p>
                  </div>
                  <img
                    src="https://razorpay.com/assets/razorpay-glyph.svg"
                    className="h-6"
                    alt="Razorpay"
                  />
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6 sticky top-6">
                <h2 className="text-lg font-semibold">Order summary</h2>
                <div className="space-y-4 max-h-[40vh] overflow-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 rounded-2xl object-cover bg-gray-50 border border-gray-100"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty {item.quantity || 1}
                        </p>
                        <p className="mt-2 text-base font-semibold">
                          {currency(item.price * (item.quantity || 1))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{currency(total)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-black text-white py-4 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  Pay with Razorpay — {currency(total)}
                </button>
              </div>
            </section>
          </form>
        )}
      </main>
    </div>
  );
};

export default Checkout;
