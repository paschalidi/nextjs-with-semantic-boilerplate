/**
 *
 * SingleContainer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN, ENTRY_ID, IMAGE_ID } from './constants';

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
            <div className="background-color-sec">
              <div className="text-block">
                <div className="color-sec"><h3>{title}</h3></div>
                <div>{subtitle}</div>
                <a>{anchor}</a>
              </div>
            </div>
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
          <div className="background-color-sec">
            <div className="text-block">
              <div className="color-sec"><h3>{title}</h3></div>
              <div>{subtitle}</div>
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

        <style jsx>
          {`
          .text-block {
          padding-left: 1em;
          top: 40%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default SingleContainer;
