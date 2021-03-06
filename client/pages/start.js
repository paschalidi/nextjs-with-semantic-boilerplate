/**
*
* start
*
*/
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import 'isomorphic-fetch';

import * as contentful from 'contentful';
import {
  SPACE_ID,
  ACCESS_TOKEN,
} from '../contentful/';

import Layout from '../components/Layout/index';

class Start extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static async getInitialProps() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });
    const res = await client.getEntries();

    return {
      contentful: {
        res,
        items: res.items,
        entry: res.includes.Entry,
        asset: res.includes.Asset,
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      res: props.contentful.res.items,
      fetchedItems: props.contentful.res.items,
      entries: props.contentful.entry,
      assets: props.contentful.asset,
      isLoading: true,
    };
  }

  componentWillMount() {
    const { assets, fetchedItems } = this.state;

    fetchedItems.map(async (entryKey) => {
      const {
        anchor,
        title,
        subtitle,
        image,
        imageMobile,

        icon,
        iconText,
        email,
        phonenumber,
        textName,
        textDetails,
        modal,
        modal01,
        modal02,
        modal03,
      } = entryKey.fields;

      let imageUrl;
      switch (entryKey.sys.id) {
        // case HEADER_ENTRY_ID:
        //   this.setState({ header: { anchor, title, subtitle, image: `https:${image.fields.file.url}` } });
        //   break;

        default:
          return;
      }
    });
  }

  getImageUrlFromAssets(assets, id) {
    const theAsset = Object.entries(assets).find((asset) => asset[1].sys.id === id);
    return `https:${theAsset[1].fields.file.url}`;
  }

  render() {
    const {
    //   header,
    } = this.state;
    return (
      <Layout pageId={this.props.url.pathname} title="Start">
        <style jsx>{``}</style>
        <p>Hello from start!!</p>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Start);