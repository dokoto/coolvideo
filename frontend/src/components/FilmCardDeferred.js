import React, { Component } from 'react';
import _ from 'lodash/object';
import { getMovie } from '../utils/api/index';
import FilmCard from './FilmCard';
import './FilmCard.css';

export default class FilmCardDeferred extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: '',
      err: false,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  doRequest() {
    const { id, handleRemove } = this.props;
    getMovie(id).then((data, err) => {
      if (!err) {
        const film = (
          <FilmCard
            key={id}
            id={_.get(data, 'data.movie.id', id)}
            backdropPath={_.get(data, 'data.movie.backdrop_path', '')}
            title={_.get(data, 'data.movie.original_title', '')}
            handleRemove={handleRemove}
          />
        );
        this.setState({ film });
      } else {
        this.setState({ err: true });
      }
    });
  }

  componentDidMount() {
    this.doRequest();
  }

  handleUpdate() {
    this.doRequest();
  }

  render() {
    const loading = <div key={this.props.id} className='Loading-spinner' />;
    const update = (
      <button key={this.props.id} type='button' click={this.handleUpdate} class='Button Button--small'>
        Actualizar...
      </button>
    );
    return this.state.err ? update : this.state.film || loading;
  }
}
