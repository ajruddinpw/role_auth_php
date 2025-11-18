import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 6) return alert("Password at least 6 chars");
    try {
      await API.post("/user/register", form);
      alert("Registered successfully. Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row"><input required placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
          <div className="form-row"><input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
          <div className="form-row"><input required type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} /></div>
          <div className="form-row">
            <label className="small-muted">Register as</label>
            <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
              <option value="customer">Customer</option>
              <option value="partner">Partner</option>
            </select>
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <button className="btn" type="submit">Register</button>
            <a href="/login" className="small-muted">Have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
