import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAuth }) {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || null;
  const role = localStorage.getItem("role") || null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>RoleAuth</div>
      <div className="nav-right">
        {!isAuth && <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>}
        {!isAuth && <Link to="/register" style={{ color: "#fff", textDecoration: "none", marginLeft: 8 }}>Register</Link>}
        {isAuth && <span style={{marginRight:12}}>Hi, {name}</span>}
        {isAuth && role === "admin" && <button className="btn-ghost" onClick={() => navigate("/admin/users")}>Users</button>}
        {isAuth && <button className="btn" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}
