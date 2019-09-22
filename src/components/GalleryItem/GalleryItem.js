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
    render() {
        return (
            <div key={this.props.photo.id}>
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
                <button onClick={() => this.props.addLike(this.props.photo.id)}>Like</button>
            </div>
        );
    }
}

export default GalleryItem;