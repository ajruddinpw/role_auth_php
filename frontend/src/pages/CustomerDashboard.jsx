import React from "react";

export default function CustomerDashboard(){
  return (
    <div className="container">
      <div className="header">
        <h2>Customer Dashboard</h2>
      </div>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <div className="card" style={{ width: 260 }}>
          <h3>Orders</h3>
          <p>3 orders placed</p>
        </div>

        <div className="card" style={{ width: 260 }}>
          <h3>Wishlist</h3>
          <p>5 items</p>
        </div>

        <div className="card" style={{ width: 260 }}>
          <h3>Profile</h3>
          <p>Update your information</p>
        </div>
      </div>
    </div>
  );
}
