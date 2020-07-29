import React, { Component } from 'react';
import styles from './Card.module.scss';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';

export default class Card extends Component {
  state = {
    cardToggle: null,
    specificFilmDetails: null
  };

  setCardToggle = event => {
    const { cardToggle } = this.state;
    console.log(event.target.parentNode);
    if (cardToggle === null) {
      this.setState(
        {
          cardToggle: this.props.imdbID
        },
        this.getSpecificFilmDetails
      );
    } else {
      this.setState({
        cardToggle: null
      });
    }
  };

  getSpecificFilmDetails = async () => {
    const { cardToggle } = this.state;

    const omdbApiResponse = await fetch(`http://www.omdbapi.com/?i=${cardToggle}&apikey=c9481b`);
    const omdbApiData = await omdbApiResponse.json();
    console.log(omdbApiData);
    await this.setState({ specificFilmDetails: omdbApiData });
  };

  render() {
    const { poster, title, year, imdbID } = this.props;
    const { specificFilmDetails } = this.state;

    return (
      <div className={styles.cardWrapper} onClick={this.setCardToggle}>
        {!this.state.cardToggle ? <CardFront poster={poster} title={title} year={year} imdbID={imdbID} /> : specificFilmDetails ? <CardBack imdbID={imdbID} specificFilmDetails={specificFilmDetails} /> : null}
      </div>
    );
  }
}

// setCardToggle={setCardToggle}
// cardToggle={cardToggle}
