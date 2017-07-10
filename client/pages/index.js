/**
 *
 * index
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
  HEADER_ENTRY_ID,
  RIGHT_SINGLE_ENTRY_ID,
  LEFT_SINGLE_ENTRY_ID,
  FIRST_TRIPLE_ENTRY_ID,
  SECOND_TRIPLE_ENTRY_ID,
  THIRD_TRIPLE_ENTRY_ID,
  TRUST_CHAIN_ID,
} from '../contentful';

import { Grid } from 'semantic-ui-react';
import Loading from '../components/Loading';

import Layout from '../components/Layout/index';
import HeroHeader from '../components/HeroHeader';
import Triple from '../components/Triple';
import Single from '../components/Single';
import Slider from '../components/Slider';
import TrustChain from '../components/TrustChain';

class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static async getInitialProps() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });
    const res = await client.getEntries();

    return {
      contentful: {
        res,
        entry: res.includes.Entry,
        asset: res.includes.Asset,
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      entries: props.contentful.entry,
      assets: props.contentful.asset,
      isLoading: true,
    };
  }

  componentWillMount() {
    const { entries, assets } = this.state;

    Object.keys(entries).map(async (entryKey) => {
      const { anchor, title, subtitle, image, trust01, trust02, trust03, trust04 } = entries[entryKey].fields;
      let imageUrl;
      switch (entries[entryKey].sys.id) {
        case HEADER_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ header: { anchor, title, subtitle, image: imageUrl } });
          break;

        case LEFT_SINGLE_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ leftSingle: { anchor, title, subtitle, image: imageUrl } });
          break;

        case RIGHT_SINGLE_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ rightSingle: { anchor, title, subtitle, image: imageUrl } });
          break;

        case FIRST_TRIPLE_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ firstTriple: { anchor, title, subtitle, image: imageUrl } });
          break;

        case SECOND_TRIPLE_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ secondTriple: { anchor, title, subtitle, image: imageUrl } });
          break;

        case THIRD_TRIPLE_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ thirdTriple: { anchor, title, subtitle, image: imageUrl } });
          break;

        case TRUST_CHAIN_ID:
          const imageUrl01 = this.getImageUrlFromAssets(assets, trust01.sys.id);
          const imageUrl02 = this.getImageUrlFromAssets(assets, trust02.sys.id);
          const imageUrl03 = this.getImageUrlFromAssets(assets, trust03.sys.id);
          const imageUrl04 = this.getImageUrlFromAssets(assets, trust04.sys.id);
          const imageUrls = [imageUrl01, imageUrl02, imageUrl03, imageUrl04]
          this.setState({ trustChain: { imageArray: imageUrls } });
          break;

        default:
          return;
      }
    });
    this.setState({ isLoading: false });
  }

  getImageUrlFromAssets(assets, id) {
    const theAsset = Object.entries(assets).find((asset) => asset[1].sys.id === id);
    return `https:${theAsset[1].fields.file.url}`;
  }

  render() {
    const {
      isLoading,
      header,
      leftSingle,
      rightSingle,
      firstTriple,
      secondTriple,
      thirdTriple,
      trustChain,
    } = this.state;

    return (
      <Layout title="Vimcar">
        <Loading isLoading={isLoading} />
        <Single hasNoContainer hasColorPrime hasImageOnRight contentfulData={header} />
        <div className="top-10">
          <Grid container centered stretched stackable textAlign="left" columns={3}>
            <Triple contentfulData={firstTriple} />
            <Triple contentfulData={secondTriple} />
            <Triple contentfulData={thirdTriple} />
          </Grid>
          <Single hasNoContainer contentfulData={leftSingle} />
          <Single hasNoContainer hasImageOnRight contentfulData={rightSingle} />
          <Slider
            images={[
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
            ]}
          />
        </div>
        <TrustChain bottom="2em" contentfulData={trustChain} />
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);
