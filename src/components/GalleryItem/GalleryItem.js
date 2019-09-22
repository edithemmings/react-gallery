import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        showCaption: false
    }
    toggleImg = () => {
        this.setState({
            showCaption: !this.state.showCaption
        })
        console.log(this.state)
    }

    handleLikeClick = () => {
        this.props.incrementLike(this.props.photo.id);
    }

    render() {
        return (
            <div>
                <div onClick={this.toggleImg} className="img_container">
                    {this.state.showCaption === true 
                        ? <h3>{this.props.photo.description}</h3> 
                        : <img
                            src={this.props.photo.path}
                            alt={this.props.photo.description}
                        />
                    }
                </div>
                <p>{this.props.photo.description}</p>
                <p>Likes: {this.props.photo.likes}</p>
                <button onClick={this.handleLikeClick}>Like</button>
            </div>
        );
    }
}

export default GalleryItem;