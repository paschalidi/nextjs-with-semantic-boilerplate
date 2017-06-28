/**
 *
 * SingleContainer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import Text from '../CenteredText';
import { Grid, Image } from 'semantic-ui-react';

class SingleContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderContainer(imageOnLeft, { image, title, subtitle, anchor }) {
    if (imageOnLeft) {
      return (
        <Grid reversed="mobile" container centered stretched stackable textAlign="left">
          <Grid.Column
            className="left-no-padding-container"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <Image className="background-color-sec" src={image} fluid />
          </Grid.Column>

          <Grid.Column
            className="right-no-padding-container text-container"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <Text title={title} subtitle={subtitle} anchor={anchor} />
          </Grid.Column>
        </Grid>
      );
    }

    return (
      <Grid container centered stretched stackable textAlign="left">
        <Grid.Column
          className="left-no-padding-container text-container"
          mobile={16}
          tablet={8}
          computer={8}
        >
          <Text title={title} subtitle={subtitle} anchor={anchor} />
        </Grid.Column>

        <Grid.Column
          className="right-no-padding-container"
          mobile={16}
          tablet={8}
          computer={8}
        >
          <Image className="background-color-sec" src={image} fluid />
        </Grid.Column>

      </Grid>

    );
  }

  render() {
    const { imageOnLeft } = this.props;

    return (
      <div>
        {this.renderContainer(imageOnLeft, this.props.contentfulData)}
      </div>
    );
  }
}

export default SingleContainer;
