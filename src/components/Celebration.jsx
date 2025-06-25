import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

function Celebration() {
  useEffect(() => {
    // Dispara confetes ao abrir
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="celebration-overlay">
      <div className="celebration-message">
        <h1>Parabéns, Lacioni!</h1>
        <h2>🏆 Campeão 🏆</h2>
      </div>
    </div>
  );
}

export default Celebration;
