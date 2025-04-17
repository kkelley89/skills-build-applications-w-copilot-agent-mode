import React, { useEffect, useState } from 'react';
import '../App.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://friendly-space-meme-vgwr444r4v9fxr5-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card custom-card">
      <div className="card-body">
        <h1 className="card-title custom-heading">Users</h1>
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;