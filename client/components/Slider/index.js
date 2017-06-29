/**
 *
 * Slider
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import ImageSlider from 'react-slick';
import { Grid } from 'semantic-ui-react';

class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderSliderImages(items) {
    return items.map((item, index) => {
      return (
        <div className="slider-img-parent" key={index}>
          <img
            alt="presentation"
            src={item}
            width="auto"
            height="500px"
          />
          <style jsx>
            {`
              .slider-img-parent {
                margin: 0 auto;
                width: 100vw;
              }

              .slider-img-parent img {
                width: 100vw;
                position: relative;
                left: calc(-50vw + 50%);
                display: block;
                object-fit: cover;
              }
          `}
          </style>
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      centerMode: true,
      infinite: true,
      fade: true,
      draggable: false,
      swipeToSlide: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slider-img-parent',
    };

    const { images } = this.props;

    return (
      <div>
        <Grid className="slider-s responsive-s" centered stackable textAlign="left" columns={1}>
          <Grid.Column>
            <ImageSlider {...settings}>
              {this.renderSliderImages(images)}
            </ImageSlider>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Slider;
