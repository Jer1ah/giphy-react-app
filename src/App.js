import React, { Component } from 'react';
import axios from "axios";
import styles from './App.css';

import Header from './Components/Header/Header';
import GifList from './Components/GifList/GifList';
import SearchBar from './Components/SearchBar/SearchBar'


class App extends Component {
    
  state = {
    title: "Giphy Search App",
    gifs: [],
    userInput: "duke"
  }

  componentDidMount() {
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.userInput}&limit=20&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38`)
       .then((res) => {
         const arr = res.data.data;
         this.setState({ gifs: arr });
     });
  }

  componentDidUpdate() {
      this.giphySearch()
  }

  searchQuery = (input) => {
      this.setState({ userInput: input });
  }
  
  giphySearch = () => {
     axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.userInput}&limit=20&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38`)
       .then((res) => {
         const arr = res.data.data;
         this.setState({ gifs: arr });
     });
  }
  
  render() { 
    return (
      <div className={styles.app}>
        <Header title={this.state.title}/>
        <SearchBar query={this.searchQuery}/>
        {this.state.gifs.length > 19 && <GifList gifList={this.state.gifs}/>}
      </div>
    );
  }
}

export default App;

