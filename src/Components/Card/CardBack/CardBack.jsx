import React, { Component } from 'react';
import styles from './CardBack.module.scss';

export default class CardBack extends Component {
  render() {
    const { poster, title, year, imdbID, specificFilmDetails } = this.props;
    console.log(specificFilmDetails);
    return (
      <div className={styles.cardBackWrapper}>
        <p>{specificFilmDetails.Plot}</p>
      </div>
    );
  }
}
