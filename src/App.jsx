import React from 'react';
import './App.css'; 

// Importando os componentes
import Header from './components/Header.jsx';
import GameTable from './components/GameTable.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import BetCard from './components/BetCard.jsx';

function App() {
  // --- DADOS DO BOLÃO ---
  const games = [
    { id: 1, date: '16/06 (Segunda) - 16:00', teams: 'Chelsea x Los Angeles FC', location: 'Atlanta' },
    { id: 2, date: '16/06 (Segunda) - 22:00', teams: 'Flamengo x Espérance', location: 'Filadélfia' },
    { id: 3, date: '20/06 (Sexta) - 15:00', teams: 'Flamengo x Chelsea', location: 'Filadélfia' },
    { id: 4, date: '20/06 (Sexta) - 19:00', teams: 'Los Angeles FC x Espérance', location: 'Geodis Park' },
    { id: 5, date: '24/06 (Terça) - 22:00', teams: 'Espérance x Chelsea', location: 'Filadélfia' },
    { id: 6, date: '24/06 (Terça) - 22:00', teams: 'Los Angeles FC x Flamengo', location: 'Camping World Stadium' },
  ];

  // Classificação dos participantes (iniciando com 0 pontos)
  const participantsClassification = [
    { id: 1, name: 'Flam', points: 0 }

  ];

  // Apostas de cada participante
  const participantsBets = [
    { participantName: 'Flam', bets: ['Chelsea 2 x 0 Los Angels FC','Flamengo 2 x 0 Espérance', 'Flamengo 0 x 1 Chelsea', 'Los Angeles FC 3 x 1 Espérance', 'Espérance 1 x 4 Chelsea', 'Los Angeles FC 1 x 2 Flamengo'] },
  ];

  return (
    <div className="app-container">
      <Header title="Bolão Mundial de Clubes FIFA" subtitle="Grupo do Flamengo - Imaturos!" />

      <div className="main-content-wrapper">
        <section id="tabela-jogos" className="section-card">
          <h2>Tabela de Jogos</h2>
          <GameTable games={games} />
        </section>

        <section id="classificacao" className="section-card">
          <h2>Classificação dos Participantes</h2>
          <Leaderboard participants={participantsClassification} />
          <p className="points-info">
            <strong>Pontuação:</strong> Acerto exato = 5 pontos | Acerto do vencedor (ou empate) = 3 pontos
          </p>
        </section>

        <section id="apostas" className="section-card">
          <h2>Apostas dos Participantes</h2>
          <div className="apostas-grid">
            {participantsBets.map((data) => (
              <BetCard key={data.participantName} participantName={data.participantName} bets={data.bets} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;