/**
 *
 * HeroHeader
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Text from '../CenteredText';

import { Grid, Image } from 'semantic-ui-react';

class HeroHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { anchor, title, subtitle, image } = this.props.contentfulData

    return (
      <div>
        <Grid className="responsive-s" centered stretched stackable textAlign="left">
          <Grid.Column
            className="left-no-padding-container bottom-s text-container"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <div className="background-color-prime">
              <Text prime title={title} subtitle={subtitle} anchor={anchor} />
            </div>
          </Grid.Column>

          <Grid.Column
            className="right-no-padding-container top-s"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <Image className="background-color-prime" src={image} fluid />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default HeroHeader;
