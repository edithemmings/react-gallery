import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        is_showing_description: true,
        viewImg: <img
                src={this.props.photo.path}
                alt={this.props.photo.description}
            />,
        viewDescription: <h3>{this.props.photo.description}</h3>,
        currentDisplay: <img
            src={this.props.photo.path}
            alt={this.props.photo.description}
        />
    }
    toggleImg = () => {
        if (this.state.is_showing_description){
            this.setState({
                ...this.state,
                currentDisplay: this.state.viewImg,
                is_showing_description: false
            })
        }
        else if (!this.state.is_showing_description){
            this.setState({
                ...this.state,
                currentDisplay: this.state.viewDescription,
                is_showing_description: true
            })
        }
        console.log(this.state)
    }
    render() {
        return (
            <div key={this.props.photo.id}>
                <div onClick={this.toggleImg} className="img_container">
                    {this.state.currentDisplay}
                </div>
                <p>{this.props.photo.description}</p>
                <p>Likes: {this.props.photo.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;