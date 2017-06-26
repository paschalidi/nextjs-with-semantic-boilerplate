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
    const { imageUrl, title, subtitle, anchor } = this.state;

    return (
      <div>
        <Grid className="responsive" centered stretched stackable textAlign="left">

          <Grid.Column
            className="left-no-padding-container text-container"
            mobile={16}
            tablet={8}
            computer={8}
          >
            <div className="background-color-prime">
              <div className="text-block">
                <div><h3>{title}</h3></div>
                <div className="color-sec">{subtitle}</div>
                <a>{anchor}</a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column className="right-no-padding-container " mobile={16} tablet={8} computer={8}>
            <Image className="background-color-prime" src={imageUrl} fluid />
          </Grid.Column>

        </Grid>
        <style jsx>
          {`
          .text-block {
          padding-left: 1em;
          }
        `}
        </style>
      </div>
    );
  }
}

export default HeroHeader;
