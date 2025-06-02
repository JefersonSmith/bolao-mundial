import React from 'react';
import './BetCard.css'; // Estilos específicos para o card de aposta

function BetCard({ participantName, bets }) {
  return (
    <div className="aposta-card">
      <h3>{participantName}</h3>
      <ul>
        {bets.map((bet, index) => (
          <li key={index}>
            <strong>{bet.split(' ')[0]} {bet.split(' ')[1]}</strong> {/* Ex: Flamengo 2 */}
            {bet.split(' ').slice(2).join(' ')} {/* Ex: x 0 Espérance */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BetCard;