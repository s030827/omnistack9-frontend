import React from 'react';
import './App.css';
import api from './services/api';
import logo from './assets/logo.svg';


function App() {
  function heandleSubmit(event) {
    event.preventDefault();

    console.log('Submit Form!')
  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC - Marcus Almeida"/>

      <div className="content">
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={heandleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
            type        = "email"
            id          = "email"
            placeholder = "Seu melhor E-mail"
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
