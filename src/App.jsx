import React, { Component } from 'react';
import styles from './App.scss';

import Card from './Components/Card';

class App extends Component {
  state = {
    searchTerm: null,
    searchTermApiResponse: {}
  };

  setSearchTerm = event => {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    });
  };

  getApiDataBySearchTerm = async event => {
    event.preventDefault();
    const { searchTerm } = this.state;

    const omdbApiResponse = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c9481b`);
    const omdbApiData = await omdbApiResponse.json();
    console.log(omdbApiData);
    await this.setState({ searchTermApiResponse: omdbApiData });
    // return null;
  };

  render() {
    return (
      <div className={styles.appWrapper}>
        <form onSubmit={this.getApiDataBySearchTerm}>
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
