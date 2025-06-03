import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>Todos os direitos reservados © <span className="brand">Imaturos</span> {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
