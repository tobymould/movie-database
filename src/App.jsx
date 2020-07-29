import React, { Component } from 'react';
import styles from './App.scss';

import Card from './Components/Card';

class App extends Component {
  state = {
    searchTerm: null,
    searchTermApiResponse: null
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
    // console.log(omdbApiData);
    await this.setState({ searchTermApiResponse: omdbApiData.Search });
    // return null;
  };

  renderMoviesOnPage = () => {
    const { searchTermApiResponse } = this.state;
    // console.log(searchTermApiResponse[1]);

    searchTermApiResponse.map(movie => {
      console.log(movie.Title);
      return <Card poster={movie.Poster} title={movie.Title} year={movie.Year} />;
    });
  };

  render() {
    const { searchTermApiResponse } = this.state;
    return (
      <div className={styles.appWrapper}>
        <form onSubmit={this.getApiDataBySearchTerm}>
          <label htmlFor="">
            Please input your search term
            <input type="text" name="search" onChange={this.setSearchTerm} />
          </label>
        </form>
        {searchTermApiResponse ? this.renderMoviesOnPage() : null}
      </div>
    );
  }
}

export default App;
