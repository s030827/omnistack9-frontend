import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';


function App() {
  const [email, setEmail] = useState('');

  async function heandleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });
    const { _id }  = response.data;

    console.log(_id);
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
            value       = {email}
            onChange    = {event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
