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
    const { isLoading, imageUrl, title, subtitle, anchor } = this.state;

    return (
      <div>
        <Grid
          className="responsive"
          stackable
          textAlign="left"
          centered
          columns={1}
        >
          <Grid.Column className="text-container">
            <Image className="background-color-prime" src={imageUrl} fluid />
            <div className="text-block">
              <div><h1>{title}</h1></div>
              <div className="color-sec">{subtitle}</div>
              <a>{anchor}</a>
            </div>
          </Grid.Column>
        </Grid>
        <style jsx>
          {`
          .text-block {
              position: absolute;
              padding-left: 3em;
              top: 40%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default HeroHeader;
