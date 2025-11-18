import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container small-muted">
        © {new Date().getFullYear()} RoleAuth — Demo app. Built for interview.
      </div>
    </footer>
  );
}
