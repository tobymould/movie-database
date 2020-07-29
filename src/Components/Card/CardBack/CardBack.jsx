import React, { Component } from 'react';
import styles from './CardBack.module.scss';

export default class CardBack extends Component {
  render() {
    const { poster, title, year } = this.props;
    // console.log(poster, title, year);
    return (
      <div className={styles.cardBackWrapper}>
        <p>this is the card's back</p>
      </div>
    );
  }
}
