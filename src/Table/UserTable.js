import React, { useState } from 'react';
import './UserTable.css'; // Ensure CSS is imported

function UserTable() {
  const [data] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
  ]);

  return (
    <div className="user-table-wrapper">
      <h2 className="user-table-title">User Table</h2>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
