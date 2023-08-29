import React from 'react';



const FinalLeaderBoard = () => {
  const users = [
    { name: 'Precious', score: 150 },
    { name: 'Toyin', score: 250 },
    { name: 'Waliyah', score: 200 },
    { name: 'Taiwo', score: 320 },
    { name: 'Brown', score: 100 },
    { name: 'Theo', score: 110 },
    { name: 'Lanre', score: 180 },
    { name: 'Damola', score: 190 },
    { name: 'Wale', score: 220 },
  ];
  // Sort the users based on scores in descending order
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);

  return (
    <div className="FinalLeaderBoard">
      <h2>FinalLeaderBoard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.name}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalLeaderBoard;
