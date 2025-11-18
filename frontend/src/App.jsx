import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminUsers from "./pages/AdminUsers";
import PartnerDashboard from "./pages/PartnerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const onStorage = () => setAuth(!!localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <>
      <Navbar isAuth={auth} />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminUsers />
              </ProtectedRoute>
            }
          />

          <Route
            path="/partner"
            element={
              <ProtectedRoute roles={["partner"]}>
                <PartnerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customer"
            element={
              <ProtectedRoute roles={["customer"]}>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
