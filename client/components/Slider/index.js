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
// import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react';

class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      centerMode: true,
      infinite: true,
      fade: true,
      draggable: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slider-img-parent',
    };

    return (
      // todo make images as props and map them
      <div className="top-10">
        <Grid centered stackable textAlign="left">
          <Grid.Row columns={1}>
            <Grid.Column>
              <ImageSlider {...settings}>
                <div className="slider-img-parent">
                  <img
                    alt="presentation"
                    src="https://unsplash.it/1200/800/?random"
                    width="auto"
                    height="500px"
                  />
                </div>
                <div className="slider-img-parent">
                  <img
                    alt="presentation"
                    src="https://unsplash.it/1200/900/?random"
                    width="auto"
                    height="500px"
                  />
                </div>
                <div className="slider-img-parent">
                  <img
                    alt="presentation"
                    src="https://unsplash.it/1100/800/?random"
                    width="auto"
                    height="500px"
                  />
                </div>
              </ImageSlider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style>
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
  }
}

Slider.propTypes = {};

export default Slider;
