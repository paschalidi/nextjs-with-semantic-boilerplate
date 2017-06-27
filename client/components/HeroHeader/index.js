/**
 *
 * HeroHeader
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Grid, Image } from 'semantic-ui-react';

class HeroHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { anchor, title, subtitle, image } = this.props.contentfulData

    return (
      <div>
        <Grid className="responsive" centered stretched stackable textAlign="left">
          <Grid.Column
            className="left-no-padding-container text-container"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <div className="background-color-prime">
              <div className="text-block">
                <div><h3>{title}</h3></div>
                <div className="color-sec">{subtitle}</div>
                <a>{anchor}</a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column
            className="right-no-padding-container"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <Image className="background-color-prime" src={image} fluid />
          </Grid.Column>

        </Grid>
        <style jsx>
          {`
          .text-block {
          padding-left: 1em;
          }
        `}
        </style>
      </div>
    );
  }
}

export default HeroHeader;
