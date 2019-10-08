import React, { useState, useMemo } from 'react';
import Api from '../../services/api';

import './style.css';
import camera from '../../assets/camera.svg';
// import { url } from 'inspector';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState('');
  const [company, setCompany]     = useState('');
  const [techs, setTech]          = useState('');
  const [prices, setPrice]        = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event) {
    event.preventDefault();

    const data    = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('prices', prices);

    await Api.post('/spots', data, {
      headers: { user_id }
    });

    history.push('/dashboard');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label 
          id="thumbnail"
          style={{ backgroundImage: `url(${preview})` }}
          className={thumbnail ? 'has-thumbnail' : '' }
        >
          <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
         <img src={camera} alt="Select img" />
        </label>

        <label htmlFor="company">Empresa *</label>
        <input
          id="company"
          placeholder="Sua empresa ímcrivel!"
          value={company}
          onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="techs">Tecnologias * <span>Separados por vírgula.</span></label>
        <input
          id="techs"
          placeholder="Suas tecnologias!"
          value={techs}
          onChange={event => setTech(event.target.value)}
        />

        <label htmlFor="price">Quanto custa a Diária!</label>
        <input
          id="price"
          placeholder="Vai cobrar quanto?"
          value={prices}
          onChange={event => setPrice(event.target.value)}
        />
      
        <button type="submit" className="btn">Cadastrar Spot</button>
      
      </form>

    </>
  );
};