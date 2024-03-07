import React from "react";
import './Header.css'

const Header = ({ black }) => {
  return (
    <div className="header--mainbar">
      <header className={black ? 'black' : ''} >
        <div className="header--logo">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png" alt="Netflix" />
          </a>
        </div>

        <ul className="header--navigation">
          <li><strong>Início</strong></li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Bombando</li>
          <li>Minha lista</li>
          <li>Navegar por idiomas</li>
        </ul>

        <div className="header--user">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="User" />
          </a>
        </div>
      </header >
    </div>
  );
}

export default Header;