import React, { Component } from 'react';
import styles from './App.scss';

import Card from './Components/Card';

//  c9481b
class App extends Component {
  state = {
    searchTerm: null,
    searchResult: {}
  };

  setSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  getAPIDataBySearchTerm = event => {
    // event.preventDefault;
    // return null;
  };

  render() {
    return (
      <div className={styles.appWrapper}>
        <form onSubmit={this.getAPIDataBySearchTerm}>
          <label htmlFor="">
            Please input your search term
            <input type="text" name="search" onChange={this.setSearchTerm} />
          </label>
        </form>
        <Card />
      </div>
    );
  }
}

export default App;
