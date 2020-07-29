import React, { Component } from 'react';
import styles from './CardBack.module.scss';

export default class CardBack extends Component {
  render() {
    const { poster, title, year, imdbID, specificFilmDetails } = this.props;
    console.log(specificFilmDetails);
    return (
      <div className={styles.cardBackWrapper}>
        <p>
          <span>Plot Line: </span>
          {specificFilmDetails.Plot}
        </p>

        <div className={styles.badges}>
          <div>{specificFilmDetails.Rated}</div>
          <div>{specificFilmDetails.imdbRating}</div>
          <div>{specificFilmDetails.Runtime}</div>
        </div>
        <p>
          <span>AWARDS: </span>
          {specificFilmDetails.Awards}
        </p>
        <p>
          <span>Genres: </span>
          {specificFilmDetails.Genre}
        </p>
        <p>
          <span>Director: </span>
          {specificFilmDetails.Director}
        </p>
        <p>
          <span>Actors: </span>
          {specificFilmDetails.Actors}
        </p>
        <p>
          <span>Language: </span>
          {specificFilmDetails.Language}
        </p>
      </div>
    );
  }
}
