import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const AddCart = createContext();
const PURCHASE_HISTORY_STORAGE_KEY = "purchaseHistory";

const AddCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(PURCHASE_HISTORY_STORAGE_KEY);
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        if (Array.isArray(parsedHistory)) {
          setPurchaseHistory(parsedHistory);
        }
      }
    } catch (error) {
      console.error("Unable to read purchase history:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      PURCHASE_HISTORY_STORAGE_KEY,
      JSON.stringify(purchaseHistory),
    );
  }, [purchaseHistory]);

  const addtoCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to cart!`);
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addPurchaseHistory = ({
    items,
    total,
    shippingCost = 0,
    savings = 0,
    deliveryType = "standard",
    customer = {},
  }) => {
    if (!items?.length) {
      return;
    }

    const order = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      total,
      shippingCost,
      savings,
      deliveryType,
      customer: {
        email: customer.email || "",
        name: `${customer.firstName || ""} ${customer.lastName || ""}`.trim(),
      },
    };

    setPurchaseHistory((prevHistory) => [order, ...prevHistory]);
  };

  return (
    <AddCart.Provider
      value={{
        cart,
        purchaseHistory,
        addtoCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        addPurchaseHistory,
      }}
    >
      {children}
    </AddCart.Provider>
  );
};
export default AddCartProvider;
export { AddCart };
