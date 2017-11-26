import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import * as store from '../utils/store';
import FilmCard from '../components/FilmCard';
import FilmsTrail from '../components/FilmsTrail';
import {
  getTopMovies,
  getFavouritesMovies,
  postFavourite,
  deleteFavourite,
} from '../utils/api/index';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      top: []
    };

    this.handleAddFavourites = this.handleAddFavourites.bind(this);
    this.handleRemoveFavourites = this.handleRemoveFavourites.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  processTop(data, err) {
    if (!err) {
      const films = _.get(data, 'data.movies', []);
      const top =
        films.map((value, index) => (
          <FilmCard
            key={index}
            id={_.get(value, 'id', index)}
            backdropPath={_.get(value, 'backdrop_path', '')}
            title={_.get(value, 'original_title', '')}
            handleAdd={this.handleAddFavourites}
            handleRemove={this.handleRemoveFavourites}
          />
        )) || [];
      this.setState({ top });
    }
  }

  processFavourites(data, err) {
    if (!err) {
      const films = _.get(data, 'data.movies', []);
      const favourites =
        films.map((value, index) => (
          <FilmCard
            key={index}
            id={_.get(value, 'id', index)}
            backdropPath={_.get(value, 'backdrop_path', '')}
            title={_.get(value, 'original_title', '')}
            handleRemove={this.handleRemoveFavourites}
          />
        )) || [];
      this.setState({ favourites });
    }
  }

  async componentDidMount() {
    this.processTop(await getTopMovies());
    this.processFavourites(await getFavouritesMovies());
  }

  handleAddFavourites(ev) {
    try {
      const movieId = $(ev.currentTarget).attr('data-movie-id');
      const { favourites, top } = this.state;
      const existFav = _.find(favourites, item => Number(item.props.id) === Number(movieId));
      if (!existFav) {
        const fav = _.cloneDeep(_.find(top, item => Number(item.props.id) === Number(movieId)));
        delete fav.props.handleAdd;
        favourites.push(fav);
        postFavourite(movieId).then((data, err) => (err ? console.error(err) : console.log(data)));
        this.setState({ favourites });
      }
    } catch (err) {
      console.error(err);
    }
  }
  handleRemoveFavourites(ev) {
    try {
      const movieId = $(ev.currentTarget).attr('data-movie-id');
      let { favourites } = this.state;
      const existFav = _.find(favourites, item => Number(item.props.id) === Number(movieId));
      if (existFav) {
        favourites = favourites.filter(item => Number(item.props.id) !== Number(movieId));
        deleteFavourite(movieId).then((data, err) => (err ? console.error(err) : console.log(data)));
        this.setState({ favourites });
      }
    } catch (err) {
      console.error(err);
    }
  }

  handleSignOut() {
    store.set('token', '');
    this.setState({ favourites: [], top: [] });
  }

  render() {
    if (!store.get('token')) {
      return <Redirect to='/login' />;
    }

    const loading = <div className='Loading-spinner' />;
    const topSeccion = (
      <FilmsTrail
        idSection='section-top'
        title='Peliculas más vistas'
        films={this.state.top}
        altText='Top de peliculas mas valoradas'
      />
    );

    return (
      <article className='dash-container'>
        <section className='signout' onClick={this.handleSignOut}>
          <a role='button' tabIndex='0'>
            Salir
          </a>
        </section>
        <FilmsTrail
          idSection='section-favourites'
          title='Mis Favoritas'
          films={this.state.favourites}
          altText='Añade tus pelis a favoritos, y apareceran aqui'
        />
        {this.state.top.length > 0 ? topSeccion : loading}
      </article>
    );
  }
}
