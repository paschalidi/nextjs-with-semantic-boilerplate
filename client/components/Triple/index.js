/**
 *
 * Triple
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Grid, Image } from 'semantic-ui-react';

class Triple extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { image, title, anchor } = this.props.contentfulData;

    return (
      <Grid.Column>
        <div className="background-color-sec">
          <Image src={image} fluid />
          <div className="text-block">
            <div className="product-subtitle"><h3>{title}</h3></div>
            <a>{anchor}</a>
          </div>
        </div>
        <style jsx>{`
          .text-block{
          position: absolute;
          bottom: 2em;
          padding-left: 1em;
          }
        `}</style>
      </Grid.Column>
    );
  }
}

export default Triple;
