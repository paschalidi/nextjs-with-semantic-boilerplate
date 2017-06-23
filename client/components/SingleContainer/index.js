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

  componentWillMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });

    client.getEntry(ENTRY_ID)
      .catch(console.error)
      .then((entry) => {
        const { title, subtitle, anchor } = entry.fields

        this.setState({ isLoading: false, title, subtitle, anchor });
      });

    client.getAsset(IMAGE_ID)
      .catch(console.error)
      .then(asset => this.setState({
        isLoading: false,
        imageUrl: `https:${asset.fields.file.url}`,
      }));
  }

  render() {
    const { imageUrl, isLoading, title, subtitle, anchor } = this.state;

    return (
      <div className="top-10">
        <Grid container centered stackable divided="vertically" textAlign="left">
          <Grid.Row stretched columns={2}>
            <Grid.Column>
              <Image src={imageUrl} fluid />
            </Grid.Column>

            <Grid.Column>
              <div className="background-color-sec">
                <div className="text-block">
                  <div className="product-title color-prime"><h1>{title}</h1></div>
                  <div className="product-subtitle color-sec">{subtitle}</div>
                  <div className="color-a">{anchor}</div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style jsx>
          {`
          .text-block {
          width: 90%
          top: 30%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default SingleContainer;
