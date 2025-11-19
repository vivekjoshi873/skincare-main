import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import { AddCart } from '../context/AddCart';

const deliveryOptions = [
  { id: 'standard', label: 'Standard', description: 'Arrives in 3-5 business days', price: 0 },
  { id: 'express', label: 'Express', description: 'Arrives in 1-2 business days', price: 220 },
  { id: 'midnight', label: 'Mid-night drop', description: 'Same night delivery within metros', price: 420 },
];

const paymentMethods = [
  { id: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, Rupay' },
  { id: 'upi', label: 'UPI', description: 'Google Pay, PhonePe, BHIM' },
  { id: 'cod', label: 'Cash on delivery', description: 'Pay when it reaches you' },
];

const Checkout = () => {
  const { cart } = useContext(AddCart);
  const navigate = useNavigate();
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0].id);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    notes: '',
  });

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0),
    [cart]
  );

  const currentDelivery = deliveryOptions.find((option) => option.id === selectedDelivery);
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
      setPromoMessage('Add a promo code to unlock a surprise reward.');
      return;
    }
    setPromoMessage(`Promo "${promoInput.trim().toUpperCase()}" saved. We will apply the best benefit at billing.`);
    setPromoInput('');
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    if (!cart.length) {
      navigate('/allproduct');
      return;
    }
    setOrderPlaced(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currency = (value) => `₹${value.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10 sm:py-14">
        <div className="mb-10 sm:mb-14 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Checkout journey</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Process to checkout with ease</h1>
          <p className="text-gray-500 max-w-2xl">
            We curated a guided, adaptable checkout that flexes for last-minute edits, different shipping moods, and payment
            preferences.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
            {['Cart', 'Details', 'Payment'].map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                    index === 1 ? 'bg-black text-white border-black' : 'border-gray-400'
                  }`}
                >
                  {index + 1}
                </span>
                {step}
                {index < 2 && <span className="w-6 h-px bg-gray-300" />}
              </div>
            ))}
          </div>
        </div>

        {orderPlaced && (
          <div className="rounded-3xl bg-green-50 border border-green-100 p-6 mb-8">
            <p className="font-semibold text-green-800">Order reserved</p>
            <p className="text-sm text-green-700 mt-1">
              We’ve locked your cart for the next 15 minutes. Finish payment whenever you’re ready—we’ll keep your ritual safe.
            </p>
          </div>
        )}

        {isCartEmpty ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center space-y-4">
            <p className="text-xl font-medium">Your ritual bag is empty.</p>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore our award-winning sun, face, and body edits. Everything here is designed to layer beautifully.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                to="/allproduct"
                className="rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
              >
                Shop all products
              </Link>
              <Link to="/store" className="text-sm font-semibold underline underline-offset-4">
                Visit nearby store
              </Link>
            </div>
          </div>
        ) : (
          <form
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start"
            onSubmit={handlePlaceOrder}
          >
            <section className="space-y-6">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Contact details</h2>
                  <span className="text-sm text-gray-500">Step 1</span>
                </div>
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
                <div className="h-px bg-gray-100" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    First name
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Avantika"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Last name
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Rao"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                </div>
                <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Address
                  <input
                    type="text"
                    name="address"
                    placeholder="House no, street, locality"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                  />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Apartment / landmark
                    <input
                      type="text"
                      name="apartment"
                      placeholder="Tower 3, Apt 18B"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    City
                    <input
                      type="text"
                      name="city"
                      placeholder="Bengaluru"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    State
                    <input
                      type="text"
                      name="state"
                      placeholder="Karnataka"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    PIN
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="560001"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Notes
                    <input
                      type="text"
                      name="notes"
                      placeholder="Gate code, delivery note"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-lg font-semibold">Delivery preferences</h2>
                  <p className="text-sm text-gray-500">Step 2</p>
                </div>
                <div className="space-y-3">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 cursor-pointer transition-colors ${
                        selectedDelivery === option.id ? 'border-black bg-black bg-opacity-[0.02]' : 'border-gray-200'
                      }`}
                    >
                      <div>
                        <p className="font-semibold">{option.label}</p>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-semibold">{option.price === 0 ? 'Free' : currency(option.price)}</p>
                        <input
                          type="radio"
                          name="deliveryOption"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={() => setSelectedDelivery(option.id)}
                          className="h-4 w-4 accent-black"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-lg font-semibold">Payment</h2>
                  <p className="text-sm text-gray-500">Step 3</p>
                </div>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 cursor-pointer transition-colors ${
                        selectedPayment === method.id ? 'border-black bg-black bg-opacity-[0.02]' : 'border-gray-200'
                      }`}
                    >
                      <div>
                        <p className="font-semibold">{method.label}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="h-4 w-4 accent-black"
                      />
                    </label>
                  ))}
                </div>

                {selectedPayment === 'card' && (
                  <div className="space-y-4">
                    <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                      Card number
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                      />
                    </label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        Expiry
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                        />
                      </label>
                      <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        CVV
                        <input
                          type="password"
                          placeholder="***"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {selectedPayment === 'upi' && (
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    UPI ID
                    <input
                      type="text"
                      placeholder="name@bank"
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </label>
                )}

                {selectedPayment === 'cod' && (
                  <p className="text-sm text-gray-500">
                    Keep exact change ready for a seamless hand-off. Our delivery partner will send an SMS before arriving.
                  </p>
                )}
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
                        <p className="text-sm text-gray-500">Qty {item.quantity || 1}</p>
                        <p className="mt-2 text-base font-semibold">{currency(item.price * (item.quantity || 1))}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500 uppercase tracking-wide">
                    <span>Subtotal</span>
                    <span>{currency(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 uppercase tracking-wide">
                    <span>Instant savings</span>
                    <span>-{currency(savings)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 uppercase tracking-wide">
                    <span>Shipping ({currentDelivery?.label})</span>
                    <span>{shippingCost === 0 ? 'Free' : currency(shippingCost)}</span>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{currency(total)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Promo / gift card
                    <div className="mt-2 flex">
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(event) => setPromoInput(event.target.value)}
                        placeholder="GLOWUP"
                        className="flex-1 rounded-l-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="rounded-r-2xl bg-black text-white px-4 py-3 text-sm font-semibold uppercase tracking-wide"
                      >
                        Apply
                      </button>
                    </div>
                  </label>
                  {promoMessage && <p className="text-xs text-gray-500">{promoMessage}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-black text-white py-4 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  Place order — {currency(total)}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By placing this order you agree to our{' '}
                  <Link to="/store" className="underline">
                    terms
                  </Link>{' '}
                  and{' '}
                  <Link to="/store" className="underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </section>
          </form>
        )}
      </main>
    </div>
  );
};

export default Checkout;

