/**
 *
 * TrustChain
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN, IMAGE_ID } from './constants';
import Loading from '../../components/Loading';

import { Grid, Image } from 'semantic-ui-react';

class TrustChain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
    };
  }

  componentDidMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

    // client.getEntry(ENTRY_ID)
    //   .catch(console.error)
    //   .then((entry) => {
    //     const { title, subtitle, anchor } = entry.fields;
    //
    //     this.setState({ isLoading: false, title, subtitle, anchor });
    //   });

    client.getAsset(IMAGE_ID)
      .catch(console.error)
      .then((asset) => {
        const { url } = asset.fields.file;

        this.setState({ imageUrl: `https:${url}` });
      });
  }

  render() {
    const { imageUrl } = this.state;
    return (
      <div>
        <Grid
          className="trust-chain background-color-sec"
          verticalAlign="middle"
          centered
        >
          <Grid.Column mobile={8} tablet={4} computer={2}>
            <Image src={imageUrl} size="small" centered />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={2}>
            <Image src={imageUrl} size="small" centered />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={2}>
            <Image src={imageUrl} size="small" centered />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={2}>
            <Image src={imageUrl} size="small" centered />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={2}>
            <Image src={imageUrl} size="small" centered />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={4} computer={2}>
            <Image src={imageUrl} size="small" centered />
          </Grid.Column>
        </Grid>
        <style jsx>
          {`
        .top-10{
        top: -2em;
        }
        `}
        </style>
      </div>
    );
  }
}

export default TrustChain;
