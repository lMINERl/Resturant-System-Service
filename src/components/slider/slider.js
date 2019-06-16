import React, { Component } from 'react';


class CarouselLeftArrow extends Component {
  render() {
    return (
      <button 
        className="button carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </button>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <button 
        className="button carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </button>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <button className={
          this.props.index === this.props.activeIndex
            ? "button carousel__indicator carousel__indicator--active"
            : "button carousel__indicator"
        }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">{this.props.slide.comment}</p>

        <div>
          <strong className="carousel-slide__author">
            {this.props.slide.userName}
          </strong>,
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.rating}
            <div className="star-rating">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
            </div>
          </small>
        </div>
      </li>
    );
  }
}

// Carousel wrapper component
export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel carousel--margin">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex === index}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

