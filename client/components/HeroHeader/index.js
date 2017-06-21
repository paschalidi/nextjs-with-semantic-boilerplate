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
import { SPACE_ID, ACCESS_TOKEN, IMAGE_ID } from './constants';
import Loading from '../../components/Loading';

import {} from 'semantic-ui-react';

export default class HeroHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
    };
  }

  componentDidMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

    // client.getEntries()
    //   .then(response => this.setState({ isLoading: false, navigationMenuItems: response.items }))
    //   .catch(console.error);
    //
    client.getAsset(IMAGE_ID)
      .catch(console.error)
      .then(asset => this.setState({
        isLoading: false,
        imageUrl: `https:${asset.fields.file.url}`,
      }));
  }

  render() {
    const { isLoading, imageUrl } = this.state

    return (
      <div className="top">
        <Loading isLoading={isLoading} />

        <div className="slider-img-parent">
          <img
            alt="presentation"
            role="presentation"
            src={imageUrl}
            width="auto"
            height="500px"
          />
        </div>

        <div className="text-block">
          <div className="product-title">Amazing Product Name</div>
          <div className="product-subtitle">Amazing Product Name Description</div>
          <p><a className="product-anchor">
            A Link to the Amazing Product
          </a></p>
        </div>

        <style jsx>{`
          .top{
            position: relative;
            top: -13px;

          }
          .slider-img-parent {
            margin: 0 auto;
            width: 100vw;
            top: -10px;
            background-color:#e3e8ee;
          }
          .slider-img-parent img {
            width: 100vw;
            position: relative;
            left: calc(-50vw + 50%);
            display: block;
            width: 100vw;
            object-fit: cover;
          }
          .text-block{
            position: relative;
            bottom: 20em;
            padding: 0 0 0 5em ;
          }
          .product-title{
            font-size: 25px;
            padding: 0 0 1em 0 ;
          }
          .product-subtitle{
            font-size: 15px;
            padding: 0 0 1em 0 ;
            color: #777f8e;
          }
          .product-anchor{
            color: #1f9ac1;
            padding: 0 0 1em 0 ;
          }
        `}</style>
      </div>
    );
  }
}