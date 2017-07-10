/**
 *
 * Single
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import Text from '../CenteredText';
import { Grid, Image } from 'semantic-ui-react';

class Single extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    hasImageOnRight: false,
    hasDoubleImage: false,
    hasNoContainer: false,
    hasColorPrime: false,
  };

  render() {
    const { hasImageOnRight, hasNoContainer, hasColorPrime, hasDoubleImage } = this.props;
    const { image, imageLeft, imageRight, title, subtitle, anchor } = this.props.contentfulData;

    console.log(imageLeft)
    console.log(hasDoubleImage)

    if (hasImageOnRight) {
      return (
        <div>
          <Grid
            className={hasNoContainer ? "header-full-width" : "container"}
            centered
            stretched
            stackable
            textAlign="left"
          >
            <Grid.Column
              className="left-no-padding-container bottom-s text-container"
              mobile={16}
              tablet={8}
              computer={8}
            >
              <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
                <Text title={title} subtitle={subtitle} anchor={anchor} />
              </div>
            </Grid.Column>

            <Grid.Column
              className="right-no-padding-container top-s"
              mobile={16}
              tablet={8}
              computer={8}
            >
              <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
                <Image src={image} fluid />
              </div>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
    else if (hasDoubleImage) {
      return (
        <div>
          <Grid className="header-full-width-s" centered stretched stackable textAlign="left">
            <Grid.Column
              className="left-no-padding-container bottom-s text-container"
              mobile={16}
              tablet={8}
              computer={8}
            >

              <div className="container-overlay background-color-prime"
                   style={{ backgroundImage: `url(${imageLeft})` }}>
                <div className="text-block text-pad-left">
                  <div className="floating-text-content">
                    <h1>{title}</h1>
                    <div className="color-sec">{subtitle}</div>
                    {anchor ? <Button>{anchor}</Button> : <span></span>}
                  </div>
                </div>
              </div>

            </Grid.Column>


            <Grid.Column
              className="right-no-padding-container top-s"
              mobile={16}
              tablet={8}
              computer={8}
            >
              <Image className="background-color-prime" src={imageRight} fluid />
            </Grid.Column>
          </Grid>
        </div>
      )
    }
    else {
      return (
        <div>
          <Grid
            className={hasNoContainer ? "header-full-width" : "container"}
            reversed="mobile"
            centered
            stretched
            stackable
            textAlign="left"
          >
            <Grid.Column
              className="left-no-padding-container top-s"
              mobile={16}
              tablet={8}
              computer={8}
            >
              <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
                <Image src={image} fluid />
              </div>
            </Grid.Column>

            <Grid.Column
              className="right-no-padding-container bottom-s text-container"
              mobile={16}
              tablet={8}
              computer={8}
            >
              <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
                <Text title={title} subtitle={subtitle} anchor={anchor} />
              </div>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
  }
}
export default Single;
