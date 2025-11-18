import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function AdminUsers(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => {
        console.error(err);
        alert("Failed to fetch users");
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h2>Admin Dashboard — Users</h2>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th><th>Created</th></tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{new Date(u.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
