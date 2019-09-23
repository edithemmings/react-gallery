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
        //could have done this below... see notes
    }

    //I could have put my incrementLike put request in this component
    //because this is the only component that uses that function

    //instead of the conditional rendering the way I did it, I could have done an if/else:
    // imageOrText = () => {
    //     if (this.state.showCaption === true){
    //         return <h3>{this.props.photo.description}</h3>
    //     } else {
    //         return <img
    //             src={this.props.photo.path}
    //             alt={this.props.photo.description}
    //         />
    //     }
    // }

    render() {
        return (
            <div className="GalleryItem">
                <div onClick={this.toggleImg} className="caption_container">
                    {this.state.showCaption === true 
                        ? <h3>{this.props.photo.description}</h3> 
                        : <img
                            src={this.props.photo.path}
                            alt={this.props.photo.description}
                        />
                    }
                    {/* if I did conditional rendering like in the comments, it would just look like: */}
                    {/* {this.imageOrText} */}
                </div>
                <button onClick={this.handleLikeClick}>Like</button>
                {/* Could have written it in the onClick by passing (event) into an arrow function. See below. */}
                {/* <button onClick={(event) => { this.props.incrementLike(this.props.photo.id) }}>Like</button>                 */}
                <p>👍 {this.props.photo.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;