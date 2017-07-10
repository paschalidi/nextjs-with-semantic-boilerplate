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
  static defaultProps = {
    contentfulData: {
      imageArray: [],
      title: null,
      subtitle: null,
      image: null,
    }
  };

  renderTrustChain(imageArray) {
    return imageArray.map((item, index) => {
      return (
        <Grid.Column key={index} mobile={8} tablet={2} computer={1}>
          <Image src={item} size="tiny" centered />
        </Grid.Column>
      );
    });
  }

  render() {
    const { imageArray } = this.props.contentfulData
    const { bottom, hasColorPrime } = this.props

    if (imageArray.length === 0) return <div>TrustChain needs some data here</div>

    return (
      <div style={{ marginBottom: `${bottom}` }}>
        <div
          className={hasColorPrime ? "background-color-prime" : "background-color-sec"}
          style={{ padding: '1.5em' }}>
          <Grid
            columns={10}
            verticalAlign="middle"
            centered
          >
            <Grid.Row>
              {this.renderTrustChain(imageArray)}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default TrustChain;
