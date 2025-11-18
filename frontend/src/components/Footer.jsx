import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container small-muted">
        © {new Date().getFullYear()} RoleAuth — A Role-Based App. Built for learning.
      </div>
    </footer>
  );
}
