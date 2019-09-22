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
      // clear out this.state photo array
      this.setState({
        ...this.state,
        photoList: []
      })
      // repopulate photo array with updated info from server
      response.data.forEach((photo) => {
        this.setState({
          ...this.state,
          photoList: [...this.state.photoList, photo]
        })
      })
    })
    .catch((error) => {
      console.log ('error in client get request ', error)
    })
  }

  incrementLike = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => {
        console.log('error in client put request ', error)
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
          incrementLike={this.incrementLike}
        />
      </div>
    );
  }
}

export default App;
