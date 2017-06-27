/**
 *
 * TripleContainer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN, ENTRY_ID, IMAGE1_ID, IMAGE2_ID, IMAGE3_ID } from './constants';

import { Grid, Image } from 'semantic-ui-react';

class TripleContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      title: null,
      subtitle: null,
      anchor: null,
    };
  }

  componentWillMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

    client.getEntry(ENTRY_ID)
      .catch(console.error)
      .then((entry) => {
        const { title, subtitle, anchor } = entry.fields;

        this.setState({ title, subtitle, anchor });
      });

    client.getAsset(IMAGE1_ID)
      .catch(console.error)
      .then((asset) => {
        const { url } = asset.fields.file;

        this.setState({ imageUrl: `https:${url}` });
      });
  }

  render() {
    const { imageUrl, title, subtitle, anchor } = this.state;

    return (
      <div>
        <Grid container centered stretched stackable textAlign="left" columns={3}>

          <Grid.Column>
            <div className="background-color-sec">
              <Image src={imageUrl} fluid />
              <div className="text-block">
                <div className="product-subtitle"><h3>{title}</h3></div>
                <a>{anchor}</a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="background-color-sec">
              <Image src={imageUrl} fluid />
              <div className="text-block">
                <div className="product-subtitle"><h3>{title}</h3></div>
                <a>{anchor}</a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="background-color-sec">
              <Image src={imageUrl} fluid />
              <div className="text-block">
                <div className="product-subtitle"><h3>{title}</h3></div>
                <a>{anchor}</a>
              </div>
            </div>
          </Grid.Column>

        </Grid>
        <style jsx>
          {`
          .text-block{
          position: absolute;
          bottom: 2em;
          padding-left: 1em;
          }

          .right-no-padding-container img {
          position: relative;
          float: left;
          width: 100%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default TripleContainer;
