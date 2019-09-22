import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';

class App extends Component {

  state = {
    photoList: [],
    photo: {
      id: 0,
      path: '',
      description: '',
      likes: 0
    }
  }

  componentDidMount = () => {
    this.getImages();
  }

  getImages = () => {
    axios.get('/gallery')
    .then((response) => {
      response.data.forEach((photo) => {
        this.setState({
          ...this.state,
          photoList: [...this.state.photoList, photo]
        })
      })
      console.log(this.state);
    })
    .catch((error) => {
      console.log ('error in client get request ', error)
    })
  }

addLikes = (photoId) => {
  this.state.photoList.forEach((photo) => {
    if (photo.id === photoId){
      photo.id++;
    }
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList 
          photoList={this.state.photoList}
          addLikes={this.addLikes}
        />
      </div>
    );
  }
}

export default App;
