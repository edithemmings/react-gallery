import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.photoList.forEach((photo) => {
                    // <GalleryItem photoList={this.props.photoList} name={photo.path}/>
                })}
            </div>
        );
    }
}

export default GalleryList;