import React, { Component } from 'react';
import styles from './Card.module.scss';

export default class Card extends Component {
  render() {
    const { poster, title, year } = this.props;
    // console.log(poster, title, year);
    return (
      <div className={styles.cardWrapper}>
        <img src={poster} alt="" />
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    );
  }
}
