import React from 'react';
import Carrusel from './Carrusel';
import './FilmsTrail.css';

export default class FilmsTrail extends React.Component {
  render() {
    const {
      title, films, altText, idSection,
    } = this.props;

    return (
      <section id={idSection} className='carruselTrack visible'>
        <h1 className='Heading1'>{title}</h1>
        <Carrusel id='favourites' films={films} altText={altText} />
      </section>
    );
  }
}
