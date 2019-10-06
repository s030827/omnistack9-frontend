import React, { useState } from 'react';
import Api from '../../services/api';

export default function Login({ history }) {

  const [email, setEmail] = useState('');

  async function heandleSubmit(event) {
    event.preventDefault();

    const response = await Api.post('/sessions', { email });
    const { _id }  = response.data;

    console.log(_id);

    history.push('/dashboard')
  }

  return (
    <>
      <p>
        Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
      </p>

      <form onSubmit={heandleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  );
};