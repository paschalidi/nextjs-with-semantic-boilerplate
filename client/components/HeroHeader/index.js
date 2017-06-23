/**
 *
 * HeroHeader
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN, ENTRY_ID, IMAGE_ID } from './constants';

import { Grid, Image } from 'semantic-ui-react';

class HeroHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
      title: null,
      subtitle: null,
      anchor: null,
    };
  }

  componentDidMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

    client.getEntry(ENTRY_ID)
      .catch(console.error)
      .then((entry) => {
        const { title, subtitle, anchor } = entry.fields;

        this.setState({ isLoading: false, title, subtitle, anchor });
      });

    client.getAsset(IMAGE_ID)
      .catch(console.error)
      .then((asset) => {
        const { url } = asset.fields.file;

        this.setState({
          isLoading: false,
          imageUrl: `https:${url}`,
        });
      });
  }

  render() {
    const { isLoading, imageUrl, title, subtitle, anchor } = this.state

    return (
      <div>
        <Grid centered stackable textAlign="left">
          <Grid.Row className="text-container padding-zero" columns={1}>
            <Grid.Column className="text-container  background-color-prime">
              <Image src={imageUrl} fluid />
              <div className="text-block">
                <div className="product-title color-prime"><h1>{title}</h1></div>
                <div className="product-subtitle color-sec">{subtitle}</div>
                <div className="color-a">{anchor}</div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style jsx>
          {`
          .text-block {
          top: 40%;
          width: 50%;
          padding-left: 5em;
          }
        `}
        </style>
      </div>
    );
  }
}

export default HeroHeader;
