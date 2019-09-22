import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div className="GalleryList">
                {this.props.photoList.map((photo) => {
                    return <GalleryItem key={photo.id}
                        photo={photo}
                        incrementLike={this.props.incrementLike}
                        />
                })}
            </div>
        );
    }
}

export default GalleryList;