import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';

class App extends Component {

  //our state and all of our functions could be moved into GalleryList
  //because it's only used by GalleryList and its children
  
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
  // can also write built in functions without arrows like:
  // componentDidMount() {
  //    this.getImages(); 
  // }

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
      // I didn't need to do a loop...
      // could have just done:
      // this.setState({
      //    ...this.state,
      //    photoList: response.data
      // }) 
      // then I wouldn't have needed to clear it out first either
      // this also makes it so that 'liking' doesn't reset all the pics to their images rather than captions
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
          <h1 className="App-title">Photo Gallery</h1>
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
