import React from 'react';
import './Leaderboard.css'; // Estilos específicos para a classificação

function Leaderboard({ participants }) {
  // Ordena os participantes por pontos (do maior para o menor)
  const sortedParticipants = [...participants].sort((a, b) => b.points - a.points);

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
        {sortedParticipants.map((p, index) => (
          <tr key={p.id}>
            <td>{index + 1}º</td> {/* Posição dinâmica */}
            <td>{p.name}</td>
            <td>{p.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;