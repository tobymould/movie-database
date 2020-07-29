import React, { Component } from 'react';
import styles from './Home.module.scss';

import Card from '../../Components/Card';
// http://www.omdbapi.com/?t=star&y=2001&plot=short&apikey=c9481b
class App extends Component {
  state = {
    searchTerm: null,
    searchYear: null,
    searchTermApiResponse: null,
    searchIDs: null
    // recentReleases: null
  };

  setSearchTerm = event => {
    console.log(event.target.type);
    if (event.target.type == 'text') {
      this.setState({
        searchTerm: event.target.value
      });
    } else if (event.target.type == 'number') {
      this.setState({
        searchYear: event.target.value
      });
    }
  };

  // componentDidMount() {
  //   const currentYear = new Date().getFullYear();

  //   const omdbApiResponse = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&y=${currentYear}&apikey=c9481b`);
  //   const omdbApiData = await omdbApiResponse.json();
  //   await this.setState({ searchTermApiResponse: omdbApiData.Search });
  // };

  getApiDataBySearchTerm = async event => {
    event.preventDefault();
    const { searchTerm, searchYear } = this.state;

    const omdbApiResponse = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&y=${searchYear}&apikey=c9481b`);
    const omdbApiData = await omdbApiResponse.json();
    await this.setState({ searchTermApiResponse: omdbApiData.Search });
  };

  renderMoviesOnPage = () => {
    const { searchTermApiResponse } = this.state;
    const { setCardToggle } = this;
    // console.log(searchTermApiResponse[1]);

    return searchTermApiResponse.map((movie, index) => {
      // console.log(movie.Year);
      return <Card poster={movie.Poster} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} key={index} />;
    });
  };

  render() {
    const { searchTermApiResponse } = this.state;
    return (
      <div className={styles.appWrapper}>
        <form onSubmit={this.getApiDataBySearchTerm}>
          <label htmlFor="">
            Name of Film:
            <input type="text" name="search" onChange={this.setSearchTerm} />
          </label>
          <label htmlFor="">
            Year of Release:
            <input type="number" name="year" onChange={this.setSearchTerm} />
          </label>
          <button onSubmit={this.getApiDataBySearchTerm}>click</button>
        </form>
        <section className={styles.cardList}>{searchTermApiResponse ? this.renderMoviesOnPage() : 'did not load'}</section>
      </div>
    );
  }
}

export default App;
