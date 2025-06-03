import React from 'react';
import './Leaderboard.css';

function Leaderboard({ participants }) {
  // Ordena os participantes por pontos (do maior para o menor)
  const sortedParticipants = [...participants].sort((a, b) => b.points - a.points);

  // Calcula as posições com base em empates
  let lastPoints = null;
  let currentPosition = 0;
  let sameRankCount = 0;

  const rankedParticipants = sortedParticipants.map((p, index) => {
    if (p.points !== lastPoints) {
      currentPosition = index + 1;
      sameRankCount = 1;
    } else {
      sameRankCount++;
    }
    lastPoints = p.points;
    return {
      ...p,
      position: currentPosition,
    };
  });

  return (
    <table className="classificacao-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Nome</th>
          <th>Pontos</th>
        </tr>
      </thead>
      <tbody>
        {rankedParticipants.map((p) => (
          <tr key={p.id}>
            <td>{p.position}º</td>
            <td>{p.name}</td>
            <td>{p.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
