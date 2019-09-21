import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.photoList.map((photo) => {
                    return <GalleryItem photo={photo}/>
                })}
            </div>
        );
    }
}

export default GalleryList;