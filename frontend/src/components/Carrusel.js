import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './Carrusel.css';

export default class Carrusel extends Component {
  changeActiveItem(activeItemIndex) {
    this.setState({ activeItemIndex });
  }

  componentWillMount() {
    this.setState({
      activeItemIndex: 0,
    });
  }

  render() {
    const { activeItemIndex } = this.state;
    const films = this.props.films || [];
    const { altText } = this.props;

    if (!films.length && altText) {
      return <h1 className='Heading2 noFilms'>{ altText }</h1>;
    }
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={3}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}
        // Carousel configurations
        numberOfCards={3}
        gutter={10}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem.bind(this)}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={true}
      >
        {films}
      </ItemsCarousel>
    );
  }
}
