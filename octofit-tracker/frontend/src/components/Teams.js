import React, { useEffect, useState } from 'react';
import '../App.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://friendly-space-meme-vgwr444r4v9fxr5-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card custom-card">
      <div className="card-body">
        <h1 className="card-title custom-heading">Teams</h1>
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;