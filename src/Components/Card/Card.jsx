import React, { Component } from 'react';
import styles from './Card.module.scss';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';

export default class Card extends Component {
  state = {
    cardToggle: true
  };

  setCardToggle = event => {
    console.log(event.target.parentNode);
    this.setState({
      cardToggle: !this.state.cardToggle
    });
  };
  render() {
    const { poster, title, year } = this.props;

    return (
      <div onClick={this.setCardToggle}>
        {/* <CardFront poster={poster} title={title} year={year} cardToggle={cardToggle} onClick={setCardToggle} /> */}
        {this.state.cardToggle ? <CardFront poster={poster} title={title} year={year} /> : <CardBack />}
      </div>
    );
  }
}

// setCardToggle={setCardToggle}
// cardToggle={cardToggle}
