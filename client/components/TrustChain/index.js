/**
 *
 * TrustChain
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Grid, Image } from 'semantic-ui-react';

class TrustChain extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderTrustChain(items) {
    return items.map((item, index) => {
      return (
        <Grid.Column key={index} mobile={8} tablet={4} computer={2}>
          <Image src={item} size="tiny" centered />
        </Grid.Column>
      );
    });
  }

  render() {
    const { image } = this.props.contentfulData
    return (
      <div style={{ marginBottom: '2em' }}>
        <div className="background-color-sec" style={{ padding: '1.5em' }}>
          <Grid
            verticalAlign="middle"
            centered
          >
            <Grid.Row>
              {this.renderTrustChain(image)}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default TrustChain;
