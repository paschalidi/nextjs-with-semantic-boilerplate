/**
 *
 * ParallaxEffect
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

class ParallaxEffect extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    max: 50,
    min: -50,
  };

  constructor() {
    super();
    this.state = { showParallax: false };
  }

  componentDidMount() {
    this.setState({ showParallax: true });
  }

  render() {
    const { children, max, min } = this.props;

    return (
      <div>
        {
          this.state.showParallax
            ?
            <ParallaxProvider>
              <Parallax offsetYMax={max} offsetYMin={min}>
                {children}
              </Parallax>
            </ParallaxProvider>
            :
            null
        }
      </div>
    );
  }
}

export default ParallaxEffect;
