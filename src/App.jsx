import React from 'react';
import './App.css';

// Importando os componentes
import Header from './components/Header.jsx';
import GameTable from './components/GameTable.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import BetCard from './components/BetCard.jsx';
import Footer from './components/Footer.jsx';
import Celebration from './components/Celebration';


function App() {
  // --- DADOS DO BOLÃO ---
  const games = [
    { id: 1, date: '16/06 (Segunda) - 16:00', teams: 'Chelsea 2 x 0 Los Angeles FC', location: 'Atlanta' },
    { id: 2, date: '16/06 (Segunda) - 22:00', teams: 'Flamengo 2 x 0 Espérance', location: 'Filadélfia' },
    { id: 3, date: '20/06 (Sexta) - 15:00', teams: 'Flamengo 3 x 1 Chelsea', location: 'Filadélfia' },
    { id: 4, date: '20/06 (Sexta) - 19:00', teams: 'Los Angeles FC 0 x 1 Espérance', location: 'Geodis Park' },
    { id: 5, date: '24/06 (Terça) - 22:00', teams: 'Espérance 0 x 3 Chelsea', location: 'Filadélfia' },
    { id: 6, date: '24/06 (Terça) - 22:00', teams: 'Los Angeles FC 1 x 1 Flamengo', location: 'Camping World Stadium' },
  ];

  // Classificação dos participantes (iniciando com 0 pontos)
  const participantsClassification = [
    { id: 1, name: 'Flam', points: 13 },
    { id: 2, name: 'Gabigol', points: 14 },
    { id: 3, name: 'Lucas', points: 13 },
    { id: 4, name: 'Lacioni', points: 15 },
    { id: 5, name: 'Erick', points: 9 },
    { id: 6, name: 'Nathan', points: 12 },
    { id: 7, name: 'Pedro', points: 14 },
    { id: 8, name: 'Kleber', points: 14 },
    { id: 9, name: 'Yure', points: 13 },
    { id: 10, name: 'Floriano', points: 11 },
    { id: 11, name: 'Brandão', points: 11 }

  ];

  // Apostas de cada participante
  const participantsBets = [
    { participantName: 'Flam', bets: ['Chelsea 2 x 0 Los Angels FC', 'Flamengo 2 x 0 Espérance', 'Flamengo 0 x 1 Chelsea', 'Los Angeles FC 3 x 1 Espérance', 'Espérance 1 x 4 Chelsea', 'Los Angeles FC 1 x 2 Flamengo'] },
    { participantName: 'Gabigol', bets: ['Chelsea 5 x 0 Los Angels FC', 'Flamengo 2 x 1 Espérance', 'Flamengo 1 x 3 Chelsea', 'Los Angeles FC 2 x 0 Espérance', 'Espérance 0 x 4 Chelsea', 'Los Angeles FC 1 x 1 Flamengo'] },
    { participantName: 'Lucas', bets: ['Chelsea 3 x 1 Los Angels FC', 'Flamengo 2 x 0 Espérance', 'Flamengo 1 x 1 Chelsea', 'Los Angeles FC 2 x 0 Espérance', 'Espérance 0 x 3 Chelsea', 'Los Angeles FC 0 x 1 Flamengo'] },
    { participantName: 'Lacioni', bets: ['Chelsea 3 x 0 Los Angels FC', 'Flamengo 2 x 1 Espérance', 'Flamengo 2 x 1 Chelsea', 'Los Angeles FC 1 x 3 Espérance', 'Espérance 0 x 2 Chelsea', 'Los Angeles FC 0 x 2 Flamengo'] },
    { participantName: 'Erick', bets: ['Chelsea 3 x 0 Los Angels FC', 'Flamengo 2 x 1 Espérance', 'Flamengo 0 x 3 Chelsea', 'Los Angeles FC 1 x 1 Espérance', 'Espérance 0 x 4 Chelsea', 'Los Angeles FC 1 x 2 Flamengo'] },
    { participantName: 'Nathan', bets: ['Chelsea 3 x 1 Los Angels FC', 'Flamengo 2 x 1 Espérance', 'Flamengo 1 x 2 Chelsea', 'Los Angeles FC 0 x 2 Espérance', 'Espérance 0 x 4 Chelsea', 'Los Angeles FC 1 x 2 Flamengo'] },
    { participantName: 'Pedro', bets: ['Chelsea 3 x 1 Los Angels FC', 'Flamengo 2 x 0 Espérance', 'Flamengo 1 x 0 Chelsea', 'Los Angeles FC 2 x 1 Espérance', 'Espérance 0 x 2 Chelsea', 'Los Angeles FC 0 x 2 Flamengo'] },
    { participantName: 'Kleber', bets: ['Chelsea 4 x 0 Los Angels FC', 'Flamengo 3 x 1 Espérance', 'Flamengo 2 x 1 Chelsea', 'Los Angeles FC 2 x 2 Espérance', 'Espérance 0 x 3 Chelsea', 'Los Angeles FC 0 x 2 Flamengo'] },
    { participantName: 'Yure', bets: ['Chelsea 2 x 1 Los Angels FC', 'Flamengo 2 x 0 Espérance', 'Flamengo 0 x 1 Chelsea', 'Los Angeles FC 1 x 0 Espérance', 'Espérance 0 x 3 Chelsea', 'Los Angeles FC 0 x 2 Flamengo'] },
    { participantName: 'Floriano', bets: ['Chelsea 4 x 0 Los Angels FC', 'Flamengo 2 x 0 Espérance', 'Flamengo 1 x 1 Chelsea', 'Los Angeles FC 0 x 0 Espérance', 'Espérance 0 x 5 Chelsea', 'Los Angeles FC 1 x 3 Flamengo'] },
    { participantName: 'Brandão', bets: ['Chelsea 2 x 0 Los Angels FC', 'Flamengo 3 x 1 Espérance', 'Flamengo 1 x 1 Chelsea', 'Los Angeles FC 2 x 2 Espérance', 'Espérance 0 x 4 Chelsea', 'Los Angeles FC 1 x 2 Flamengo'] },
  ];

  return (
    <div className="app-container">
      <Celebration />
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
      <Footer />
    </div>
  );
}

export default App;