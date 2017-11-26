import React from 'react';
import './Header.css';
import verMasTarde from './ver-mas-tarde.svg';

export default () => (
  <header className='HeaderLogin'>
    <div className='HeaderLogin-content'>
      <div className='HeaderLogin-logo'>
        <figure>
          <img className='Header-logoImage' src={verMasTarde} alt='Paga+Tarde' />
        </figure>
        <h1 className='HeaderLogin-title'>Paga+Tarde</h1>
      </div>
    </div>
  </header>
);
