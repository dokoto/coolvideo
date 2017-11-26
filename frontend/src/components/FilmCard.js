import React, { Component } from 'react';
import './FilmCard.css';

export default class FilmCard extends Component {
  render() {
    const {
      id, backdropPath, title, handleAdd, handleRemove, filmData,
    } = this.props;
    const addButton = (
      <a role='button' tabIndex='0' className='button' onClick={handleAdd} data-movie-id={id}>
        +
      </a>
    );
    const removeButton = (
      <a role='button' tabIndex='0' className='button' onClick={handleRemove} data-movie-id={id}>
        -
      </a>
    );

    return (
      <div
        className='imageContainer'
        data-film={filmData}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${ backdropPath })`,
        }}
      >
        <span className='title'>{title}</span>
        <div className='actions'>
          {handleAdd ? addButton : ''}
          {handleRemove ? removeButton : ''}
        </div>
      </div>
    );
  }
}
