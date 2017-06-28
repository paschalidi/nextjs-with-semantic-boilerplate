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

import Loading from '../components/Loading';

import Layout from '../components/Layout/index';
import HeroHeader from '../components/HeroHeader';
import TripleContainer from '../components/TripleContainer';
import Triple from '../components/Triple';
import SingleContainer from '../components/SingleContainer';
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
          this.setState({ leftSingleContainer: { anchor, title, subtitle, image: imageUrl } });
          break;

        case RIGHT_SINGLE_ENTRY_ID:
          imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({ rightSingleContainer: { anchor, title, subtitle, image: imageUrl } });
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
          console.log("trust01")
          console.log(trust01)
          console.log(trust02)
          console.log(trust03)
          console.log(trust04)
          const imageUrl01 = this.getImageUrlFromAssets(assets, trust01.sys.id);
          const imageUrl02 = this.getImageUrlFromAssets(assets, trust02.sys.id);
          const imageUrl03 = this.getImageUrlFromAssets(assets, trust03.sys.id);
          const imageUrl04 = this.getImageUrlFromAssets(assets, trust04.sys.id);
          const ImageUrls = [imageUrl01, imageUrl02, imageUrl03, imageUrl04]
          this.setState({ trustChain: { image: ImageUrls } });
          break;

        default:
          return true;
      }
    });
    this.setState({ isLoading: false });
  }

  getImageUrlFromAssets(assets, id) {
    const asset = Object.entries(assets).find((asset) => asset[1].sys.id === id);
    return `https:${asset[1].fields.file.url}`;
  }

  render() {
    const {
      isLoading,
      header,
      leftSingleContainer,
      rightSingleContainer,
      firstTriple,
      secondTriple,
      thirdTriple,
      trustChain,
    } = this.state;

    return (
      <Layout title="Vimcar">
        <Loading isLoading={isLoading} />
        <HeroHeader contentfulData={header} />
        <div className="top-10">
          <TripleContainer >
            <Triple contentfulData={firstTriple} />
            <Triple contentfulData={secondTriple} />
            <Triple contentfulData={thirdTriple} />
          </TripleContainer>
          <SingleContainer imageOnLeft contentfulData={leftSingleContainer} />
          <SingleContainer contentfulData={rightSingleContainer} />
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
          <TrustChain contentfulData={trustChain} />
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);
