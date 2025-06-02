import React from 'react';
import './Header.css'; // Estilos específicos para o Header

function Header({ title, subtitle }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default Header;