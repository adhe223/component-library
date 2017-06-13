import React from 'react';
import '../stylesheets/PhotoStream.css';

class PhotoStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    slideLeft() {
        this.changeImage(-1);
    }

    slideRight() {
        this.changeImage(1);
    }

    changeImage(offset) {
        const slides = document.getElementsByClassName('photo-slide');
        let index = this.state.activeIndex + offset;

        // Negative numbers in module are weird in JS, this behaves as expected
        index = ((index % slides.length) + slides.length) % slides.length;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        const width = this.props.width || "100%";
        const height = this.props.height || "600px";
        const style = {
            width: width,
            height: height,
        };

        const activeIndex = this.state.activeIndex;
        // Generate the JSX to display based on the list of photos
        const photosJSX = this.props.photos.map((photoData, i) => {
            let display = activeIndex === i ? "block" : "none";
            const style = {
                display: display
            };
            return <img key={i} className="photo-slide" src={photoData.src} alt={photoData.alt} style={style} />
        });

        return (
            <div className="photo-container" style={style}>
                {photosJSX}
                <button className="slide-left" onClick={this.slideLeft}>&#10094;</button>
                <button className="slide-right" onClick={this.slideRight}>&#10095;</button>
            </div>
        );
    }
}

export default PhotoStream;