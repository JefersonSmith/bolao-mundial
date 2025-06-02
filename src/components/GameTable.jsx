import React from 'react';
import './GameTable.css'; // Estilos específicos para a tabela de jogos

function GameTable({ games }) {
  return (
    <table className="jogos-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Partida</th>
          <th>Local</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr key={game.id}>
            <td className="data-hora">{game.date}</td>
            <td>
              <span className="mandante">{game.teams.split(' x ')[0]}</span> x{' '}
              <span className="visitante">{game.teams.split(' x ')[1]}</span>
            </td>
            <td className="local">{game.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameTable;