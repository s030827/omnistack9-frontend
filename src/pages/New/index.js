import React, { useState, useMemo } from 'react';

import './style.css';
import camera from '../../assets/camera.svg';
// import { url } from 'inspector';

export default function New() {
  const [thumbnail, setThumbnail] = useState('');
  const [company, setCompany]     = useState('');
  const [techs, setTech]          = useState('');
  const [prices, setPrice]        = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  function handleSubmit() {

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
      </form>

      <button type="submit" className="btn">Cadastrar Spot</button>
    </>
  );
};