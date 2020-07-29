import React, { Component } from 'react';
import styles from './CardFront.module.scss';

export default class CardFront extends Component {
  render() {
    const { poster, title, year } = this.props;
    // console.log(poster, title, year);
    return (
      <div className={styles.cardFrontWrapper}>
        <img src={poster ? poster : 'No poster is present'} alt="" />
        <div className={styles.textSection}>
          <h3>{title}</h3>
          <p>{year}</p>
        </div>
      </div>
    );
  }
}
