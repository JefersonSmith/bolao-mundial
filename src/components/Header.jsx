import React from 'react';
import './Header.css';
import flamengoLogo from '../assets/Fla.png'

function Header({ title, subtitle }) {
  return (
    <header className="app-header">
      <img src={flamengoLogo} alt="Escudo do Flamengo" className="flamengo-logo" />
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
