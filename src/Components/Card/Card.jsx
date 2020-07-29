import React, { Component } from 'react';
import styles from './Card.module.scss';

export default class Card extends Component {
  render() {
    return (
      <div className={styles.cardWrapper}>
        <p>I am working</p>
      </div>
    );
  }
}
