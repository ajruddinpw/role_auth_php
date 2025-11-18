import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/login", form);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("role", user.role);
      // also keep user object if needed
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") navigate("/admin/users");
      else if (user.role === "partner") navigate("/partner");
      else navigate("/customer");

      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 520, margin: "0 auto" }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="email" placeholder="Email" required
              value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
          </div>
          <div className="form-row">
            <input type="password" placeholder="Password" required
              value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <button className="btn" type="submit">Login</button>
            <a href="/register" className="small-muted">Don't have account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}
