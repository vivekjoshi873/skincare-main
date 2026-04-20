import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { AddCart } from "../context/AddCart";

const PurchaseHistory = () => {
  const { purchaseHistory } = useContext(AddCart);

  const currency = (value) => `Rs.${Number(value || 0).toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-gray-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10 sm:py-14">
        <div className="mb-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Account
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Purchase History
          </h1>
          <p className="text-gray-500">
            View your previous orders and totals.
          </p>
        </div>

        {purchaseHistory.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center space-y-4">
            <p className="text-xl font-medium">No purchases yet.</p>
            <Link
              to="/allproduct"
              className="inline-block rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {purchaseHistory.map((order) => (
              <section
                key={order.id}
                className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-5">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <p className="text-lg font-semibold">{currency(order.total)}</p>
                </div>

                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={`${order.id}-${item.id}`} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 rounded-xl object-cover bg-gray-50 border border-gray-100"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty {item.quantity || 1}
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          {currency((item.price || 0) * (item.quantity || 1))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PurchaseHistory;
