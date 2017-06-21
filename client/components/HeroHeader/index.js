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
import Loading from '../../components/Loading';

import { Image } from 'semantic-ui-react';

export default class HeroHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
      title: null,
      subTitle: null,
      buttonText: null,
    };
  }

  componentDidMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });

    client.getEntry(ENTRY_ID)
      .catch(console.error)
      .then((entry) => {
        const { title, subTitle, buttonText } = entry.fields;

        this.setState({ isLoading: false, title, subTitle, buttonText });
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
    const { isLoading, imageUrl, title, subTitle, buttonText } = this.state

    return (
      <div className="top">
        <Loading isLoading={isLoading} />

        <Image src={imageUrl} fluid />

        <div className="text-block">
          <div className="product-title">{title}</div>
          <div className="product-subtitle">{subTitle}</div>
          <p><a className="product-anchor">{buttonText}</a></p>
        </div>

        <style jsx>{`
          .top{
            position: relative;
            top: -13px;

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