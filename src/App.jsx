import React, { Component } from 'react';
import styles from './App.scss';

import Card from './Components/Card';

//  c9481b
class App extends Component {
  state = {
    searchTerm: null,
    searchResult: {}
  };

  searchData = () => {};

  render() {
    return (
      <div className={styles.appWrapper}>
        <Card />
      </div>
    );
  }
}

export default App;
