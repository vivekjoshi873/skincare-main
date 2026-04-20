import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import AllProducts from "./pages/AllProducts";
import Store from "./pages/Store";
import Layout from "./Layouts/Layout";
import CurlyHair from "./pages/CurlyHair";
import Suncream from "./pages/Suncream";
import TanningCream from "./pages/TanningCream";
import Facewash from "./pages/FaceWash";
import AcneCream from "./pages/AcneProne";
import Cicacream from "./pages/CicaCream";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import PurchaseHistory from "./pages/PurchaseHistory";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<div />} />
          <Route path="store" element={<Store />} />
          <Route path="allproduct" element={<AllProducts />} />
          <Route path="curly-hair" element={<CurlyHair />} />
          <Route path="suncream" element={<Suncream />} />
          <Route path="tanning-cream" element={<TanningCream />} />
          <Route path="face-wash" element={<Facewash />} />
          <Route path="acnecream" element={<AcneCream />} />
          <Route path="cicacream" element={<Cicacream />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
