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
import Loading from '../../components/Loading';

import { Grid, Image, } from 'semantic-ui-react';

export default class SingleContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
      title: null,
      subTitle: null,
      anchor: null,
    };
  }

  componentWillMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });
    //
    client.getEntry(ENTRY_ID)
      .catch(console.error)
      .then((entry) => {
        const { title, subTitle, anchor } = entry.fields

        this.setState({ isLoading: false, title, subTitle, anchor });
      });

    client.getAsset(IMAGE_ID)
      .then(asset => this.setState({
        isLoading: false,
        imageUrl: `https:${asset.fields.file.url}`,
      }))
      .catch(console.error);
  }

  render() {
    const { imageUrl, isLoading, title, subTitle, anchor } = this.state;

    return (
      <div>
        <Grid container centered stackable divided="vertically" textAlign="left">
          <Grid.Row stretched columns={2}>
            <Grid.Column>
              <Loading isLoading={isLoading} />
              <Image src={imageUrl} fluid />
            </Grid.Column>

            <Grid.Column>
              <div className="text-column">
                {title}
                {subTitle}
                {anchor}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style jsx>
          {`

          .top{
            position: relative;
            top: -10em;
          }
          .no-round-corner {
            border-radius: 0px !important;
          }
          .text-block{
            position: relative;
            bottom: 1em;
          }
          .product-title{
            margin: 0;
            font-size: 25px;
          }
          .product-anchor{
            color: #1f9ac1;
          }
          .text-column{
            background-color:#f2f2f2;
          }
          .image-column{
            background: yellow !important;
          }
          .compact-column {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

        `}
        </style>
      </div>
    );
  }
}


