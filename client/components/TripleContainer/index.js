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
import { SPACE_ID, ACCESS_TOKEN, LOGO } from '../NavigationMenu/constants';

import { Grid, Segment, Image, Icon } from 'semantic-ui-react';

class TripleContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      logoUrl: null,
    };
  }

  componentWillMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });

    client.getAsset(LOGO)
      .then(asset => this.setState({ logoUrl: `https:${asset.fields.file.url}` }))
      .catch(console.error);
  }

  render() {
    const { logoUrl } = this.state;

    return (
      <div>
        <Grid container centered stackable>
          <Grid.Row stretched columns={3}>
            <Grid.Column>
              <Segment className="no-round-corner">
                <Image src={logoUrl} fluid />
                <div className="text-block">
                  <div className="product-title">Amazing Product Name</div>
                  <p><a className="product-anchor">
                    A Link to the Amazing Product<Icon name="long arrow right" />
                  </a></p>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="no-round-corner">
                <Image src={logoUrl} fluid />
                <div className="text-block">
                  <div className="product-title">Amazing Product Name</div>
                  <p><a className="product-anchor">
                    A Link to the Amazing Product<Icon name="long arrow right" />
                  </a></p>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="no-round-corner">
                <Image src={logoUrl} fluid />
                <div className="text-block">
                  <div className="product-title">Amazing Product Name</div>
                  <p><a className="product-anchor">
                    A Link to the Amazing Product<Icon name="long arrow right" />
                  </a></p>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style jsx>
          {`
          .no-round-corner {
            border-radius: 0px !important;
            background-color:#f2f2f2;
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

        `}
        </style>
      </div>
    );
  }
}

export default TripleContainer;
