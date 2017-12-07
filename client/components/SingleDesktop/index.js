/**
 *
 * SingleDesktop
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Grid, Image, } from 'semantic-ui-react';
import TabletAndComputer from '../Responsive/TabletAndComputer';

class SingleDesktop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    backgroundImage: null,
    hasColorPrime: false,
    hasColorSec: false,
    hasColorDarkPrime: false,
    hasColorDark: false,
    hasColorSplitBlue: false,
    hasColorBlue: false,
    hasColorWhite: false,
    hasColorOrange: false,
    hasFullScreen: true,
    position: 'center',
    backgroundSize: 'cover',
    textAlign: 'left',
  };

  constructor(props) {
    super(props);
    if (props.backgroundImage)
      this.state = {
        isLoaded: false,
        backgroundStyle: {
          background: `url(${this.props.backgroundImage}) no-repeat center center`,
          backgroundPosition: this.props.position,
          backgroundSize: this.props.backgroundSize,
        }
      }
    else
      this.state = { isLoaded: true, backgroundStyle: {} }
  }

  imageLoader = () => {
    return (
      <Image
        style={{ display: 'none' }}
        onLoad={this.handleImageLoaded}
        src={this.props.backgroundImage}
      />
    )
  }

  handleImageLoaded = () => {
    this.setState({ isLoaded: true, })
  }

  render() {
    const {
      textAlign,
      hasFullScreen,
      hasColorSec,
      hasColorBlue,
      hasColorDark,
      hasColorPrime,
      hasColorDarkPrime,
      hasColorSplitBlue,
      hasColorOrange,
      hasColorWhite,
      children
    } = this.props;

    return (
      <div className={`${hasFullScreen ? "aligner" : null} `}>
        {this.imageLoader()}
        <div
          className={`
              ${hasFullScreen ? "aligner-item full-height" : null}
              ${hasColorPrime ? "background-color-prime" : hasColorDark ? "background-color-dark" : hasColorDarkPrime ? "background-color-dark-prime" : hasColorSec ? "background-color-sec" : hasColorBlue ? "background-color-blue" : hasColorOrange ? "background-color-angled-orange" : hasColorSplitBlue ? "f7fdfdbackground-color-angled-index" : hasColorWhite ? "background-color-white" : null }
            `}
        >
          {
            this.state.isLoaded
              ?
              <TabletAndComputer>
                <div
                  style={this.props.backgroundImage && this.state.backgroundStyle}
                  className={`${hasFullScreen ? "aligner-item full-height background-image-fadeIn " : null} `}
                >
                  <Grid container centered stretched stackable>
                    <Grid.Column className="padding-b-s" textAlign={textAlign}>
                      {children}
                    </Grid.Column>
                  </Grid>
                </div>
              </TabletAndComputer>
              :
              <TabletAndComputer>
                <div className={`${hasFullScreen ? "aligner-item full-height" : null} `} />
              </TabletAndComputer>
          }
        </div>
        {/* language=CSS */}
        <style jsx>
          {`
              .flex-middle {
                  width: 300px;
                  background: #fefefe;
                  flex: 1;
              }

              .flex-bottom-item {
                  width: 300px;
                  background: #fefefe;
              }

              .top-header {
                  margin-bottom: 200px;
              }
          `}
        </style>
      </div>
    )
  }
}

export default SingleDesktop;
